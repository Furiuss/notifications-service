import { NotificationsControllers } from './controllers/notifications.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [NotificationsControllers],
})
export class HttpModule {}
