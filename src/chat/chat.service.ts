import { Injectable } from '@nestjs/common';
import { AiService } from 'src/ai/ai.service';

@Injectable()
export class ChatService {
    constructor(private readonly aiService: AiService) {}

  async processMessage(message: string) {
    const intent = await this.aiService.classifyIntent(message);
    const reply = await this.aiService.generateResponse(message);

    return {
      message,
      intent,
      reply,
      timestamp: new Date(),
    };
  }
}
