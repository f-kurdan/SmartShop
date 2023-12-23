import { Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common'
import { CreateCategoryDto } from './dto/create-category-dto';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categorysService: CategoriesService) { }

  @Get()
  getAllCategorys() {
    return this.categorysService.getAllCategories()
  }

  @Get(':id')
  getOneCategory(id: string) {
    return this.categorysService.getOneCategory(id)
  }

  @Post()
  createCategory(@Body() dto: CreateCategoryDto) {
    return this.categorysService.createCategory(dto);
  }

  @Patch()
  updateCategory(@Param() id: string, dto: CreateCategoryDto) {
    return this.categorysService.updateCategory(id, dto)
  }

  @Delete(':id')
  deleteCategory(@Param('id') id: string) {
    return this.categorysService.deleteCategory(id)
  }
}

