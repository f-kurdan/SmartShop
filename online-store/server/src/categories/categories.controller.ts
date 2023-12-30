import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe} from '@nestjs/common'
import { CreateCategoryDto } from './dto/create-category-dto';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) { }

  @Get()
  getAllCategorys() {
    return this.categoriesService.getAllCategories()
  }

  @Get(':id')
  getOneCategory(@Param('id', ParseIntPipe)id: string) {
    return this.categoriesService.getOneCategory(id)
  }

  @Post()
  createCategory(@Body() dto: CreateCategoryDto) {
    return this.categoriesService.createCategory(dto);
  }

  @Patch("id")
  updateCategory(@Param('id', ParseIntPipe) id: string, dto: CreateCategoryDto) {
    return this.categoriesService.updateCategory(id, dto)
  }

  @Delete(':id')
  deleteCategory(@Param('id', ParseIntPipe) id: string) {
    return this.categoriesService.deleteCategory(id)
  }
}

