import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { AiModule } from 'src/ai/ai.module';

@Module({
  providers: [ChatService],
  controllers: [ChatController],
  imports: [AiModule]
})
export class ChatModule {}
