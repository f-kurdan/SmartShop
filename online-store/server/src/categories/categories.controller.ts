import { Controller, Get, Post, Body, Patch, Param} from '@nestjs/common'
import { CategorysService } from './categories.service';
import { CreateCategoryDto } from './dto/createCategoryDto';

@Controller('categories')
export class CategorysController {
  constructor(private readonly categorysService: CategorysService) { }

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
}

