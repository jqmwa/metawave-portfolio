import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const apiKey = process.env.ELEVENLABS_API_KEY?.trim().replace(/^['"]|['"]$/g, '');
  const rawAgentId = process.env.ELEVENLABS_AGENT_ID_Q?.trim() || 'agent_9201m4e3qnv6f87bewbankzh7ytj';
  const agentId = rawAgentId.replace(/^['"]|['"]$/g, '');
  const companionName = 'Q';

  if (!apiKey) {
    return NextResponse.json(
      { error: `${companionName} voice is currently unavailable. Please verify ELEVENLABS_API_KEY.` },
      { status: 503 },
    );
  }

  try {
    const response = await fetch(
      `https://api.elevenlabs.io/v1/convai/conversation/get-signed-url?agent_id=${encodeURIComponent(agentId)}`,
      {
        method: 'GET',
        headers: {
          'xi-api-key': apiKey,
        },
        cache: 'no-store',
      },
    );

    if (!response.ok) {
      const errorText = await response.text().catch(() => '');
      console.error('Failed to get ElevenLabs signed conversation URL:', response.status, errorText);
      return NextResponse.json(
        { error: `Could not connect with ${companionName} right now. Please try again in a moment.` },
        { status: response.status },
      );
    }

    const data = (await response.json()) as { signed_url?: string };
    if (!data.signed_url) {
      return NextResponse.json(
        { error: `Could not connect with ${companionName} right now. Please try again in a moment.` },
        { status: 502 },
      );
    }

    return NextResponse.json({
      signedUrl: data.signed_url,
      companionName,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('Error requesting conversation signed URL:', message);
    return NextResponse.json(
      { error: `Could not connect with ${companionName} right now. Please try again in a moment.` },
      { status: 500 },
    );
  }
}
