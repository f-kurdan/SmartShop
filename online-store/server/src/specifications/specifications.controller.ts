import { Controller, Get, Param } from '@nestjs/common';
import { SpecificationsService } from './specifications.service';

@Controller('specifications')
export class SpecificationsController {
  constructor(private readonly specificationsService: SpecificationsService) { }

  @Get(':category')
  getAll(@Param('category') category: string) {
    return this.specificationsService.getAll(category)
  }
}
