import { PrismaService } from './infra/prisma.service';
import { AppController } from './infra/app.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
