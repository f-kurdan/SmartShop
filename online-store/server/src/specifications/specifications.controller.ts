import { Controller, Get, Query } from '@nestjs/common';
import { SpecificationsService } from './specifications.service';

@Controller('specifications')
export class SpecificationsController {
  constructor(private readonly specificationsService: SpecificationsService) { }

  @Get()
  getAll(@Query('categories') categories?: string) {
    console.log(categories.split(';'))
    return this.specificationsService.getAll(categories.split(';'))
  }
}
