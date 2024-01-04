import { Module } from '@nestjs/common';
import { SpecificationsService } from './specifications.service';
import { SpecificationsController } from './specifications.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [SpecificationsController],
  providers: [SpecificationsService],
  imports: [PrismaModule]
})
export class SpecificationsModule {}
