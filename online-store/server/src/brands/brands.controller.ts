import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, HttpCode } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand-dto';
import { UpdateBrandDto } from './dto/update-brand-dto';

@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {
  }

  @Get()
  getAllBrands() {
    return this.brandsService.getAllBrands()
  }

  @Get(':id')
  getOneBrand(@Param('id', ParseIntPipe) id: string) {
    return this.brandsService.getOneBrand(id)
  }

  @HttpCode(200)
  @Post()
  createBrand(@Body() dto: CreateBrandDto) {
    return this.brandsService.createBrand(dto);
  }

  @HttpCode(200)
  @Patch()
  updateBrand(@Body() dto: UpdateBrandDto) {
    return this.brandsService.updateBrand(dto)
  }

  @Delete(':id')
  deleteBrand(@Param('id', ParseIntPipe) id: number) {
    return this.brandsService.deleteBrand(id)
  }
}
