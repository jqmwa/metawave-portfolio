/**
 * Voice speech utilities for Metawave Studio & Q's ElevenLabs voice integration.
 */

/**
 * Removes XML/HTML-style tags (like <red>, </red>, <break>)
 * and square-bracketed speech/emotion tags (like [laughing], [sighs], [chuckles])
 * from conversational speech transcripts so that subtitles are clean.
 */
export function cleanAgentSpeechTags(text: string): string {
  if (!text) return '';
  return text
    .replace(/<\/?[A-Za-z0-9_-]+(?:\s+[^>]*)?>/g, '')
    .replace(/\[[A-Za-z][A-Za-z\s,.'"-]*\]\s*/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}
