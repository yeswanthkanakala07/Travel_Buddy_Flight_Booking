// import { Module } from '@nestjs/common';
// import { ConfigModule } from '@nestjs/config';
// import { NotificationService } from './notification.service';

// @Module({
//   imports: [ConfigModule],
//   providers: [NotificationService],
//   exports: [NotificationService],
// })
// export class NotificationModule {}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NotificationService } from './notification.service';

@Module({
  imports: [ConfigModule.forRoot()], // Ensure ConfigModule is loaded with .env configuration
  providers: [NotificationService],
  exports: [NotificationService],
})
export class NotificationModule {}
