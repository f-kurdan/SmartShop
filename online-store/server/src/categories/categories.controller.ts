import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseInterceptors, UploadedFile, ParseFilePipeBuilder, HttpStatus} from '@nestjs/common'
import { CreateCategoryDto } from './dto/create-category-dto';
import { CategoriesService } from './categories.service';
import { FileInterceptor } from '@nestjs/platform-express';

const MAX_PROFILE_PICTURE_SIZE_IN_BYTES = 5 * 1024 * 1024;

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
  @UseInterceptors(FileInterceptor('file'))
  createCategory(@UploadedFile(
    new ParseFilePipeBuilder()
        .addFileTypeValidator({ fileType: 'image/jpeg' })
        .addMaxSizeValidator({ maxSize: MAX_PROFILE_PICTURE_SIZE_IN_BYTES })
        .build({ errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY }),
  ) file: Express.Multer.File,
  @Body() dto: CreateCategoryDto) {
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

