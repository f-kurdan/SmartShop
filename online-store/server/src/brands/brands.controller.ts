import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand-dto';

@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {
  }

  @Get()
  getAllBrands() {
    return this.brandsService.getAllBrands()
  }

  @Get(':id')
  getOneBrand(id: string) {
    return this.brandsService.getOneBrand(id)
  }

  @Post()
  createBrand(@Body() dto: CreateBrandDto) {
    return this.brandsService.createBrand(dto);
  }

  @Patch()
  updateBrand(@Param() id: string, dto: CreateBrandDto) {
    return this.brandsService.updateBrand(id, dto)
  }

  @Delete(':id')
  deleteBrand(@Param('id') id: string) {
    return this.brandsService.deleteBrand(id)
  }
}
