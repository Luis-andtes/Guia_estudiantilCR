import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const userMessage = messages[messages.length - 1].content;

    // Usamos directamente la API de chat completions que es más simple
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "Eres un asistente virtual del colegio. Responde de manera clara y concisa."
        },
        {
          role: "user",
          content: userMessage
        }
      ],
      max_tokens: 1000,
      temperature: 0.7,
    });

    return NextResponse.json({ 
      response: completion.choices[0].message.content 
    });

  } catch (error) {
    console.error('Error en la API de chat:', error);
    return NextResponse.json(
      { 
        error: 'Error al procesar tu mensaje. Por favor, inténtalo de nuevo.' 
      },
      { status: 500 }
    );
  }
}
