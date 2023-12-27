import { Controller, Get, Post, HttpCode, Param, Body, Put, Patch, Delete, ParseIntPipe, Query, ValidationPipe } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';
import { UpdateProductDto } from './dto/update-product-dto';

@Controller("products")
export class ProductsController {
    constructor(private productService: ProductsService) { }

    @Get()
    async getProducts(
        @Query('page', ParseIntPipe) page: number,
        @Query('search_term') searchTerm?: string,
        @Query('categories') categoriesSlugs?: string,
        @Query('brands') brandsSlugs?: string,
        @Query('specs') specs?: string,
    ) {
        const categoriesArr = categoriesSlugs?.split(',')
        const brandsArr = brandsSlugs?.split(',')
        const specsArr = specs?.split(',')
        const products = await this.productService.findProducts(page, searchTerm, categoriesArr, brandsArr, specsArr);

        if (!products.products)
            throw new Error("No products")

        return products;
    }

    @Get('/slug/:slug')
    getOneProduct(@Param('slug') slug: string) {
        return this.productService.findOneProduct(slug)
    }

    @Get(':id')
    getOneProductById(@Param('id', ParseIntPipe) id: string) {
        return this.productService.findOneProductById(id)
    }

    @Post()
    @HttpCode(200)
    createProduct(@Body() createProductDto: CreateProductDto) {
        this.productService.createProduct(createProductDto)
    }

    @Patch(':id')
    updateProduct(@Param("id", ParseIntPipe) id: string, @Body() dto: UpdateProductDto) {
        this.productService.updateProduct(id, dto)
    }

    @Delete(':id')
    deleteProduct(@Param("id", ParseIntPipe) id: string) {
        this.productService.deleteProduct(id)
    }
}