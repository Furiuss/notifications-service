import { DatabaseModule } from './../database/database.module';
import { NotificationsControllers } from './controllers/notifications.controller';
import { Module } from '@nestjs/common';
import { SendNotification } from 'src/application/use-cases/send-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsControllers],
  providers: [SendNotification],
})
export class HttpModule {}
