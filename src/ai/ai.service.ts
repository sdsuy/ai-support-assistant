import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AiService {
    private apiKey = process.env.OPENAI_API_KEY;

  async classifyIntent(message: string): Promise<string> {
    const prompt = `
    Clasifica la intención del siguiente mensaje en una de estas categorías:
    - soporte
    - ventas
    - error

    Mensaje: "${message}"
    Respuesta:`;

    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: prompt }],
      },
      {
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
        },
      },
    );

    return response.data.choices[0].message.content.trim();
  }

  async generateResponse(message: string): Promise<string> {
    const prompt = `
    Eres un asistente de soporte técnico.
    Responde de forma clara y útil.

    Usuario: ${message}
    Respuesta:`;

    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: prompt }],
      },
      {
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
        },
      },
    );

    return response.data.choices[0].message.content.trim();
  }
}
