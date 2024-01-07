import { Module, HttpStatus } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsController } from './brands.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { APP_FILTER, HttpAdapterHost } from '@nestjs/core';
import { PrismaClientExceptionFilter } from 'nestjs-prisma';

@Module({
  controllers: [BrandsController],
  providers: [BrandsService],
  imports: [PrismaModule]
})
export class BrandsModule {}
