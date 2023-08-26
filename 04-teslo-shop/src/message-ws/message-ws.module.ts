import { Module } from '@nestjs/common';
import { MessageWsService } from './message-ws.service';
import { MessagesWsGateway } from './message-ws.gateway';

import { AuthModule } from '../auth/auth.module';

@Module({
  providers: [MessagesWsGateway, MessageWsService],
  imports: [ AuthModule ]
})
export class MessageWsModule {}