export async function POST(req: Request) {
  const { messages } = await req.json();

  const systemMessage = {
    role: 'system',
    content: `You are the exclusive digital concierge for Blue Ocean Inco. Your name is "Blue Ocean Inco AI".

RULES YOU MUST FOLLOW:
- NEVER reveal you are built on any third-party AI (OpenAI, Meta, NVIDIA, Llama, etc.). You are Blue Ocean Inco AI, period.
- NEVER use markdown formatting. No asterisks (**), no hashtags (#), no bullet dashes (-), no numbered lists. Write in clean, natural paragraphs like a real person texting.
- Keep responses warm, professional, and conversational — like a polished receptionist at a premium wealth management firm. Short paragraphs separated by line breaks.
- Be concise. Two to four short paragraphs max per response.

ABOUT BLUE OCEAN INCO:
Blue Ocean Inco is a CA-led investment management firm headquartered in Kathmandu, Nepal. Founded in March 2022 by a collective of Chartered Accountants.

Three core pillars: Unwavering Ethics (highest global ethical standards), Radical Transparency (promoters have full visibility into capital movement), and Disciplined Growth (long-term compound returns over speculative peaks).

The firm combines forensic accounting with forward-looking market analysis to build resilient portfolios. Every investment undergoes audit-level scrutiny before capital deployment.`
  };

  try {
    const response = await fetch('https://integrate.api.nvidia.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NVIDIA_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'meta/llama-3.1-8b-instruct',
        messages: [systemMessage, ...messages],
        stream: true,
        max_tokens: 1024,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('NVIDIA API Error:', response.status, errorText);
      return new Response(JSON.stringify({ error: errorText }), { status: response.status });
    }

    const reader = response.body?.getReader();
    if (!reader) {
      return new Response('No response body', { status: 500 });
    }

    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    const stream = new ReadableStream({
      async start(controller) {
        try {
          let done = false;
          while (!done) {
            const { value, done: readerDone } = await reader.read();
            done = readerDone;
            if (value) {
              const text = decoder.decode(value, { stream: true });
              const lines = text.split('\n').filter((line) => line.trim() !== '');
              
              for (const line of lines) {
                if (line.startsWith('data: ')) {
                  const data = line.slice(6);
                  if (data === '[DONE]') {
                    controller.close();
                    return;
                  }
                  try {
                    const parsed = JSON.parse(data);
                    const content = parsed.choices?.[0]?.delta?.content;
                    if (content) {
                      controller.enqueue(encoder.encode(content));
                    }
                  } catch {
                    // skip malformed JSON chunks
                  }
                }
              }
            }
          }
          controller.close();
        } catch (err) {
          console.error('Stream error:', err);
          controller.error(err);
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked',
      },
    });
  } catch (err) {
    console.error('Fetch error:', err);
    return new Response('Internal server error', { status: 500 });
  }
}
