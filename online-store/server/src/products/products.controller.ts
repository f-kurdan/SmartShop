import { Controller, Get, Post, HttpCode, Param, Body, Patch, Delete, ParseIntPipe, Query, UseInterceptors, ParseFilePipeBuilder, HttpStatus, UploadedFiles, StreamableFile, ParseFilePipe, FileTypeValidator, MaxFileSizeValidator} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';
import { UpdateProductDto } from './dto/update-product-dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import multer from 'multer';
import convertToSlug from '../utils/convertToSlug';
import fs from 'fs';
import { join } from 'path';
import MultiStream from 'multistream';

@Controller("products")
export class ProductsController {
    constructor(private productService: ProductsService) { }

    @Get()
    async getProducts(
        @Query('page', ParseIntPipe) page?: number,
        @Query('search_term') searchTerm?: string,
        @Query('category') categoriesSlugs?: string,
        @Query('brand') brandsSlugs?: string,
        @Query('specs') specs?: string,
    ) {
        const categoriesArr = categoriesSlugs?.split(';')
        const brandsArr = brandsSlugs?.split(';')
        const specsArr = specs?.split(';')
        const products = await this.productService.findProducts(page, searchTerm, categoriesArr, brandsArr, specsArr);

        if (!products.products)
            throw new Error("No products")

        return products;
    }

    @Get('/pages')
    getTotalPAges() {
        return this.productService.getTotalPages()
    }

    @Get('name/:name')
    findOneProductsByName(@Param('name') name: string,
        @Query('color') color?: string,
        @Query('storageSize') storageSize?: string,
    ) {
        return this.productService.findOneProductsByName(name, color, storageSize);
    }

    @Get(':slug')
    getOneProduct(@Param('slug') slug: string) {
        return this.productService.findOneProduct(slug)
    }

    @Post()
    @HttpCode(200)
    @UseInterceptors(FilesInterceptor('images[]', null, {
        storage: multer.diskStorage({
            destination: (res, file, cb) => {
                const { name, categorySlug } = res.body;
                const path = `public/images/products/${categorySlug}/${convertToSlug(name)}`;

                if (fs.existsSync(path)) {
                    cb(null, path)
                }
                else {
                    fs.mkdirSync(path, { recursive: true })
                    cb(null, path)
                }
            },
            filename: (req, file, cb) => {
                cb(null, `${file.originalname}`)
            },
        })
    }))
    createProduct(@UploadedFiles(
        new ParseFilePipeBuilder()
            .addFileTypeValidator({ fileType: '.(png|jpeg|jpg|avif|webp)' })
            .addMaxSizeValidator({ maxSize: 5 * 1024 * 1024 })
            .build({ errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY }),
    ) images: Express.Multer.File[], @Body() createProductDto: CreateProductDto) {
        return this.productService.createProduct(createProductDto, images)
    }

    @Patch()
    @HttpCode(200)
    @UseInterceptors(FilesInterceptor('images[]', null, {
        storage: multer.diskStorage({
            destination: (res, file, cb) => {
                const { name, categorySlug } = res.body;
                const path = `public/images/products/${categorySlug}/${convertToSlug(name)}`;

                if (fs.existsSync(path)) {
                    cb(null, path)
                }
                else {
                    fs.mkdirSync(path, { recursive: true })
                    cb(null, path)
                }
            },
            filename: (req, file, cb) => {
                cb(null, `${file.originalname}`)
            },
        })
    }))
    udatePoduct(@UploadedFiles(
        new ParseFilePipe({
            validators: [new FileTypeValidator({ fileType: '.(png|jpeg|jpg|avif|webp)' }),
            new MaxFileSizeValidator({ maxSize: 5 * 1024 * 1024 })],
            fileIsRequired: false,
            errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
          }),
    ) images: Express.Multer.File[], @Body() updateProductDto: UpdateProductDto) {
        return this.productService.updateProduct(updateProductDto, images)
    }

    @Delete(':id')
    deleteProduct(@Param("id", ParseIntPipe) id: string) {
        return this.productService.deleteProduct(id)
    }
}