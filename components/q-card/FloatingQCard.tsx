'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import {
  Mic,
  MicOff,
  Phone,
  PhoneOff,
  ChevronDown,
  X,
  Radio,
  RefreshCw,
  Sparkles,
  Volume2,
  AlertCircle,
  Terminal,
} from 'lucide-react';
import { cleanAgentSpeechTags } from '@/lib/voice-speech';
import type { VoiceConversation } from '@elevenlabs/client';

type SessionStatus = 'idle' | 'connecting' | 'connected' | 'error';
type SessionMode = 'idle' | 'listening' | 'speaking';

interface SpokenMessage {
  role: 'agent' | 'user';
  text: string;
}

const QUICK_PROMPTS = [
  'What is Metawave Studio?',
  "What's your design philosophy?",
  'Tell me about your tech stack',
];

export function FloatingQCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<SessionStatus>('idle');
  const [mode, setMode] = useState<SessionMode>('idle');
  const [isMicMuted, setIsMicMuted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [currentMessage, setCurrentMessage] = useState<SpokenMessage | null>(null);
  const [volumeLevel, setVolumeLevel] = useState(0);

  const conversationRef = useRef<VoiceConversation | null>(null);
  const sessionIdRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll transcript container when message changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [currentMessage]);

  // Volume sampling loop for animated equalizer
  const startVolumeSampling = useCallback((conversation: VoiceConversation) => {
    const sample = () => {
      if (conversationRef.current) {
        try {
          let outputVol = 0;
          let inputVol = 0;

          if (typeof conversation.getOutputVolume === 'function') {
            outputVol = conversation.getOutputVolume() || 0;
          }
          if (typeof conversation.getInputVolume === 'function') {
            inputVol = conversation.getInputVolume() || 0;
          }

          // Combined normalized level
          const raw = Math.max(outputVol * 5.0, inputVol * 4.0);
          const smoothed = Math.min(1, Math.max(0, raw));
          setVolumeLevel(smoothed);
        } catch {
          setVolumeLevel(0);
        }
        rafRef.current = requestAnimationFrame(sample);
      } else {
        setVolumeLevel(0);
      }
    };
    rafRef.current = requestAnimationFrame(sample);
  }, []);

  // Cleanup active session
  const cleanupSession = useCallback(async () => {
    sessionIdRef.current += 1;
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    if (conversationRef.current) {
      try {
        await conversationRef.current.endSession();
      } catch {
        // Ignored
      }
      conversationRef.current = null;
    }
    setVolumeLevel(0);
    setMode('idle');
  }, []);

  // End voice call
  const endCall = useCallback(async () => {
    await cleanupSession();
    setStatus('idle');
  }, [cleanupSession]);

  // Start voice conversation
  const startConversation = useCallback(
    async (firstMessageOverride?: string) => {
      await cleanupSession();
      const currentSessionId = ++sessionIdRef.current;

      setStatus('connecting');
      setErrorMessage(null);

      // Check for microphone device availability
      if (typeof navigator !== 'undefined' && navigator.mediaDevices?.getUserMedia) {
        try {
          const testStream = await navigator.mediaDevices.getUserMedia({ audio: true });
          // Release test stream right away
          testStream.getTracks().forEach((track) => track.stop());
        } catch (micErr: unknown) {
          const errName = (micErr as { name?: string })?.name;
          if (errName === 'NotAllowedError' || errName === 'PermissionDeniedError') {
            setStatus('error');
            setErrorMessage(
              'Microphone access was denied. Please allow microphone permissions in your browser to talk with Q.',
            );
            return;
          }
        }
      }

      try {
        const res = await fetch('/api/voice/conversation-url', { cache: 'no-store' });
        if (currentSessionId !== sessionIdRef.current) return;

        if (!res.ok) {
          const data = (await res.json().catch(() => ({}))) as { error?: string };
          throw new Error(data.error || 'Could not connect with Q right now.');
        }

        const data = (await res.json()) as { signedUrl?: string };
        const signedUrl = data.signedUrl;
        if (!signedUrl) {
          throw new Error('No signed voice stream URL returned from server.');
        }

        if (currentSessionId !== sessionIdRef.current) return;

        // Dynamic import to avoid SSR issues
        const { Conversation } = await import('@elevenlabs/client');
        if (currentSessionId !== sessionIdRef.current) return;

        const conversation = await Conversation.startSession({
          signedUrl,
          overrides: firstMessageOverride
            ? {
                agent: {
                  firstMessage: firstMessageOverride,
                },
              }
            : undefined,
          onConnect: () => {
            if (currentSessionId !== sessionIdRef.current) {
              void conversationRef.current?.endSession().catch(() => {});
              return;
            }
            setStatus('connected');
            setIsMicMuted(false);
          },
          onDisconnect: () => {
            if (currentSessionId === sessionIdRef.current) {
              setStatus('idle');
              setMode('idle');
              setVolumeLevel(0);
            }
          },
          onError: (err) => {
            if (currentSessionId !== sessionIdRef.current) return;
            console.error('Q voice session error:', err);
            setStatus('error');
            setErrorMessage('Voice connection dropped. Please try again.');
            setVolumeLevel(0);
          },
          onModeChange: ({ mode: nextMode }) => {
            if (currentSessionId !== sessionIdRef.current) return;
            setMode(nextMode);
          },
          onStatusChange: ({ status: convStatus }) => {
            if (currentSessionId !== sessionIdRef.current) return;
            if (convStatus === 'connected') {
              setStatus('connected');
            } else if (convStatus === 'disconnected') {
              setStatus('idle');
              setMode('idle');
            } else if (convStatus === 'connecting') {
              setStatus('connecting');
            }
          },
          onMessage: (payload) => {
            if (currentSessionId !== sessionIdRef.current) return;
            if (payload?.message) {
              const role = payload.role === 'agent' ? 'agent' : 'user';
              const cleanText =
                role === 'agent' ? cleanAgentSpeechTags(payload.message) : payload.message.trim();
              if (cleanText) {
                setCurrentMessage({ role, text: cleanText });
              }
            }
          },
        });

        if (currentSessionId !== sessionIdRef.current) {
          void conversation.endSession().catch(() => {});
          return;
        }

        conversationRef.current = conversation as VoiceConversation;
        startVolumeSampling(conversation as VoiceConversation);
      } catch (err: unknown) {
        if (currentSessionId !== sessionIdRef.current) return;
        console.error('Error starting Q voice conversation:', err);
        const msg = err instanceof Error ? err.message : 'Could not reach Q voice stream.';
        setStatus('error');
        setErrorMessage(msg);
      }
    },
    [cleanupSession, startVolumeSampling],
  );

  // Toggle mic mute
  const toggleMic = useCallback(() => {
    if (!conversationRef.current) return;
    const nextMuted = !isMicMuted;
    try {
      conversationRef.current.setMicMuted(nextMuted);
      setIsMicMuted(nextMuted);
    } catch (e) {
      console.error('Failed to toggle mic:', e);
    }
  }, [isMicMuted]);

  // Clean up on component unmount
  useEffect(() => {
    return () => {
      void cleanupSession();
    };
  }, [cleanupSession]);

  const isCallActive = status === 'connected' || status === 'connecting';

  return (
    <>
      {/* 1. Minimized / Floating Launcher Pill */}
      {!isOpen && (
        <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-3 rounded-full bg-[#070710]/95 border border-[#21ba8c]/40 px-3.5 py-2.5 shadow-[0_0_25px_rgba(33,186,140,0.22)] backdrop-blur-xl transition-all duration-300 hover:border-[#21ba8c] hover:shadow-[0_0_35px_rgba(33,186,140,0.4)] hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Open Q Voice Companion"
          >
            {/* Glow halo behind button */}
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[#21ba8c]/20 to-[#6653df]/20 blur-md opacity-70 group-hover:opacity-100 transition-opacity" />

            {/* Q Avatar with Live Pulse */}
            <div className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-[#21ba8c]/60 shadow-[0_0_10px_rgba(33,186,140,0.3)]">
              <Image
                src="/q-avatar.png"
                alt="Q Avatar"
                fill
                sizes="36px"
                className="object-cover"
              />
              {/* Online indicator dot */}
              <span
                className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border border-[#070710] ${
                  isCallActive
                    ? 'bg-[#6653df] animate-ping'
                    : 'bg-[#21ba8c]'
                }`}
              />
            </div>

            {/* Text badge / Call status */}
            <div className="flex flex-col text-left pr-1">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold tracking-wider text-white">Q</span>
                <span className="text-[10px] uppercase tracking-wider text-[#21ba8c] font-mono">
                  {isCallActive ? 'Live Call' : 'Voice Link'}
                </span>
              </div>
              <span className="text-[11px] text-[#a8a7c0] group-hover:text-white transition-colors">
                {isCallActive ? 'Tap to open call' : 'Talk with Q'}
              </span>
            </div>

            {/* Mini visualizer equalizer if in active call */}
            {isCallActive ? (
              <div className="flex items-center gap-0.5 h-4 pl-1">
                {[40, 90, 60, 100].map((h, i) => (
                  <span
                    key={i}
                    className="w-1 bg-[#21ba8c] rounded-full animate-pulse"
                    style={{
                      height: `${Math.max(4, h * (volumeLevel > 0.1 ? volumeLevel : 0.4))}%`,
                      animationDelay: `${i * 120}ms`,
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#21ba8c]/15 text-[#21ba8c] group-hover:bg-[#21ba8c] group-hover:text-[#010104] transition-all">
                <Mic className="h-3.5 w-3.5" />
              </div>
            )}
          </button>
        </div>
      )}

      {/* 2. Expanded Floating Q Card */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Q Voice Companion Console"
          className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 w-[360px] sm:w-[390px] max-w-[calc(100vw-2.5rem)] rounded-2xl border border-[#21ba8c]/35 bg-[#070710]/95 backdrop-blur-2xl shadow-[0_15px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(33,186,140,0.22)] flex flex-col overflow-hidden text-[#eae9fc] transition-all duration-300 animate-in fade-in zoom-in-95"
        >
          {/* Cyberpunk Top Accent Bar */}
          <div className="h-1 w-full bg-gradient-to-r from-[#21ba8c] via-[#6653df] to-[#d4cff2]" />

          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-[#2a2a3a]/80 bg-[#0c0c16]/80">
            <div className="flex items-center gap-3">
              {/* Avatar with dynamic ring */}
              <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-[#21ba8c]/60 shadow-[0_0_12px_rgba(33,186,140,0.35)]">
                <Image
                  src="/q-avatar.png"
                  alt="Q - Metawave Companion"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold tracking-wide text-white">Q</h3>
                  <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-[#21ba8c]/15 text-[#21ba8c] border border-[#21ba8c]/30">
                    {status === 'connected'
                      ? mode === 'speaking'
                        ? 'Speaking'
                        : mode === 'listening'
                          ? isMicMuted
                            ? 'Muted'
                            : 'Listening'
                          : 'Connected'
                      : status === 'connecting'
                        ? 'Linking...'
                        : status === 'error'
                          ? 'Offline'
                          : 'Online'}
                  </span>
                </div>
                <p className="text-[11px] text-[#a8a7c0]">Metawave Creative Intelligence</p>
              </div>
            </div>

            {/* Header controls: minimize / close */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-[#a8a7c0] hover:text-white hover:bg-white/10 transition-colors"
                title="Minimize card"
                aria-label="Minimize card"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => {
                  if (isCallActive) void endCall();
                  setIsOpen(false);
                }}
                className="p-1.5 rounded-lg text-[#a8a7c0] hover:text-red-400 hover:bg-red-500/10 transition-colors"
                title="Close"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Body Stage */}
          <div className="p-4 space-y-3.5">
            {/* Audio Waveform / Visualizer Stage */}
            {status === 'connected' ? (
              <div className="relative flex flex-col items-center justify-center py-4 px-3 rounded-xl bg-[#0e0e1a]/80 border border-[#21ba8c]/25 overflow-hidden">
                {/* Radial background glow */}
                <div
                  className="absolute inset-0 -z-10 bg-radial from-[#21ba8c]/15 via-transparent to-transparent opacity-80"
                  style={{
                    transform: `scale(${1 + volumeLevel * 0.5})`,
                    transition: 'transform 100ms ease-out',
                  }}
                />

                {/* 9-bar reactive equalizer */}
                <div className="flex items-end justify-center gap-1.5 h-12 w-full px-4">
                  {[25, 45, 75, 95, 100, 85, 65, 40, 20].map((baseHeight, idx) => {
                    // dynamic scale per bar
                    const activeAmp =
                      volumeLevel > 0.05
                        ? Math.min(100, Math.max(12, baseHeight * volumeLevel * 1.8))
                        : mode === 'speaking'
                          ? Math.sin(Date.now() / 200 + idx) * 20 + 35
                          : 12;

                    return (
                      <div
                        key={idx}
                        className="w-1.5 rounded-full transition-all duration-75"
                        style={{
                          height: `${activeAmp}%`,
                          background:
                            mode === 'speaking'
                              ? 'linear-gradient(to top, #6653df, #21ba8c)'
                              : isMicMuted
                                ? '#ef4444'
                                : 'linear-gradient(to top, #21ba8c, #d4cff2)',
                          boxShadow:
                            volumeLevel > 0.15
                              ? '0 0 8px rgba(33, 186, 140, 0.6)'
                              : 'none',
                        }}
                      />
                    );
                  })}
                </div>

                <div className="mt-3 flex items-center justify-between w-full text-[11px] text-[#a8a7c0] font-mono px-2">
                  <span className="flex items-center gap-1 text-[#21ba8c]">
                    <Radio className="w-3 h-3 animate-pulse" />
                    48kHz OPUS
                  </span>
                  <span>
                    {mode === 'speaking'
                      ? 'Q is answering...'
                      : isMicMuted
                        ? 'Mic muted'
                        : 'Listening to your voice'}
                  </span>
                </div>
              </div>
            ) : status === 'connecting' ? (
              <div className="flex flex-col items-center justify-center py-6 px-4 rounded-xl bg-[#0e0e1a]/60 border border-[#2a2a3a] text-center">
                <RefreshCw className="w-7 h-7 text-[#21ba8c] animate-spin mb-2" />
                <p className="text-xs font-mono text-[#eae9fc]">Establishing secure voice link...</p>
                <p className="text-[11px] text-[#a8a7c0] mt-1">Connecting to Quinn voice daemon</p>
              </div>
            ) : status === 'error' ? (
              <div className="flex flex-col items-center justify-center py-4 px-3 rounded-xl bg-red-950/20 border border-red-500/30 text-center">
                <AlertCircle className="w-6 h-6 text-red-400 mb-1.5" />
                <p className="text-xs font-semibold text-red-200">Connection Error</p>
                <p className="text-[11px] text-red-300/80 mt-1 max-w-[280px]">
                  {errorMessage || 'Failed to establish voice session with Q.'}
                </p>
              </div>
            ) : (
              /* Idle state intro */
              <div className="p-3.5 rounded-xl bg-[#0e0e1a]/60 border border-[#2a2a3a]/70">
                <div className="flex items-start gap-2.5">
                  <Terminal className="w-4 h-4 text-[#21ba8c] mt-0.5 shrink-0" />
                  <p className="text-xs text-[#a8a7c0] leading-relaxed">
                    Direct neural audio link to <span className="text-white font-medium">Q</span>.
                    Ask about Metawave's projects, spatial 3D interfaces, design philosophy, or architecture.
                  </p>
                </div>

                {/* Quick Prompts */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {QUICK_PROMPTS.map((prompt, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => void startConversation(`User asks: ${prompt}`)}
                      className="text-[10px] px-2.5 py-1 rounded-md bg-[#161626] hover:bg-[#21ba8c]/15 text-[#d4cff2] hover:text-[#21ba8c] border border-white/5 hover:border-[#21ba8c]/40 transition-all text-left"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Live Subtitle Transcript Bubble */}
            {status === 'connected' && currentMessage && (
              <div
                ref={scrollRef}
                className="max-h-28 overflow-y-auto rounded-lg p-2.5 bg-[#0a0a14] border border-[#2a2a3a] text-xs leading-relaxed"
              >
                <div className="flex items-center gap-1.5 mb-1 font-mono text-[10px]">
                  <span
                    className={`font-semibold uppercase ${
                      currentMessage.role === 'agent' ? 'text-[#21ba8c]' : 'text-[#6653df]'
                    }`}
                  >
                    {currentMessage.role === 'agent' ? 'Q // VOICE' : 'YOU // MIC'}
                  </span>
                </div>
                <p className="text-[#eae9fc] text-[12px]">{currentMessage.text}</p>
              </div>
            )}
          </div>

          {/* Footer Controls */}
          <div className="p-4 pt-1 border-t border-[#2a2a3a]/80 bg-[#090912]">
            {status === 'connected' ? (
              <div className="flex items-center gap-2">
                {/* Mute toggle button */}
                <button
                  type="button"
                  onClick={toggleMic}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${
                    isMicMuted
                      ? 'bg-red-500/20 border-red-500/50 text-red-200 hover:bg-red-500/30'
                      : 'bg-white/10 border-white/10 text-white hover:bg-white/15'
                  }`}
                  aria-pressed={isMicMuted}
                >
                  {isMicMuted ? (
                    <>
                      <MicOff className="w-3.5 h-3.5 text-red-400" />
                      <span>Unmute</span>
                    </>
                  ) : (
                    <>
                      <Mic className="w-3.5 h-3.5 text-[#21ba8c]" />
                      <span>Mute Mic</span>
                    </>
                  )}
                </button>

                {/* End call button */}
                <button
                  type="button"
                  onClick={() => void endCall()}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-semibold shadow-[0_0_15px_rgba(239,68,68,0.35)] transition-all cursor-pointer"
                >
                  <PhoneOff className="w-3.5 h-3.5" />
                  <span>End Call</span>
                </button>
              </div>
            ) : status === 'connecting' ? (
              <button
                type="button"
                disabled
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1a1a28] text-[#a8a7c0] text-xs font-semibold border border-[#2a2a3a] cursor-not-allowed opacity-80"
              >
                <RefreshCw className="w-4 h-4 animate-spin text-[#21ba8c]" />
                <span>Connecting audio channel...</span>
              </button>
            ) : status === 'error' ? (
              <button
                type="button"
                onClick={() => void startConversation()}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#21ba8c] to-[#6653df] hover:opacity-95 text-[#010104] text-xs font-bold transition-all shadow-[0_0_20px_rgba(33,186,140,0.3)] cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Retry Call</span>
              </button>
            ) : (
              /* Idle state: Start Call */
              <button
                type="button"
                onClick={() => void startConversation()}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#21ba8c] to-[#6653df] hover:opacity-95 text-[#010104] text-xs font-bold transition-all shadow-[0_0_20px_rgba(33,186,140,0.3)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <Mic className="w-3.5 h-3.5" />
                <span>Start Voice Session</span>
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default FloatingQCard;
