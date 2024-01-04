import { Controller, Get, Query } from '@nestjs/common';
import { SpecificationsService } from './specifications.service';

@Controller('specifications')
export class SpecificationsController {
  constructor(private readonly specificationsService: SpecificationsService) { }

  @Get()
  getAll(@Query('categories') categories?: string) {
    const filter = categories ? categories.split(';') : null
    return this.specificationsService.getAll(filter)
  }
}
