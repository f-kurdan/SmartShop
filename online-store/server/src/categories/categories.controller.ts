import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseInterceptors, UploadedFile, ParseFilePipeBuilder, HttpStatus, HttpCode, Put, ParseFilePipe, FileTypeValidator, MaxFileSizeValidator } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express';
import multer from 'multer';
import { CreateCategoryDto } from './dto/create-category-dto';
import { CategoriesService } from './categories.service';
import { UpdateCategoryDto } from './dto/update-category-dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) { }

  @Get()
  getAllCategorys() {
    return this.categoriesService.getAllCategories()
  }

  @Get(':id')
  getOneCategory(@Param('id', ParseIntPipe) id: string) {
    return this.categoriesService.getOneCategory(id)
  }

  @Post()
  @HttpCode(200)
  @UseInterceptors(FileInterceptor('categoryImage', {
    storage: multer.diskStorage({
      destination: 'public/images/categories',
      filename: (req, file, cb) => {
        cb(null, file.originalname)
      },
    })
  }))
  createCategory(@UploadedFile(
    new ParseFilePipeBuilder()
      .addFileTypeValidator({ fileType: '.(png|jpeg|jpg|avif)' })
      .addMaxSizeValidator({ maxSize: 5 * 1024 * 1024 })
      .build({ errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY }),
  ) categoryImage: Express.Multer.File,
    @Body() dto: CreateCategoryDto) {
    return this.categoriesService.createCategory(dto, categoryImage);
  }

  @HttpCode(200)
  @UseInterceptors(FileInterceptor('categoryImage', {
    storage: multer.diskStorage({
      destination: 'public/images/categories',
      filename: (req, file, cb) => {
        cb(null, file.originalname)
      },
    })
  }))
  @Put()
  updateCategory(@Body() dto: UpdateCategoryDto, @UploadedFile(
    new ParseFilePipe({
      validators: [new FileTypeValidator({ fileType: '.(png|jpeg|jpg|avif)' }),
      new MaxFileSizeValidator({ maxSize: 5 * 1024 * 1024 })],
      fileIsRequired: false,
      errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
    }),
  ) categoryImage?: Express.Multer.File) {
    return this.categoriesService.updateCategory(dto, categoryImage)
  }

  @Delete(':id')
  deleteCategory(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.deleteCategory(id)
  }
}

