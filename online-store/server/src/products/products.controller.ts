import { Controller, Get, Post, HttpCode, Param, Body, Put, Patch, Delete } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';

@Controller("products")
export class ProductsController {
    constructor (private productService: ProductsService) {}
    @Get()
    getAllProducts () {
        return this.productService.findAllProducts();
    }

    
    @Get('/slug/:slug')
    getOneProduct(@Param('slug') slug: string) {
        return this.productService.findOneProduct(slug)
    }
    
    @Get(':id')
    getOneProductById(@Param('id') id: string) {
        return this.productService.findOneProductById(id)
    }

    @Post()
    @HttpCode(204)
    createProduct(@Body() createProductDto: CreateProductDto) {
        this.productService.createProduct(createProductDto)
    }

    @Patch(':id')
    updateProduct(@Param("id") id: string, @Body() dto: CreateProductDto) {
        this.productService.updateProduct(id, dto)
    }

    @Delete(':id')
    deleteProduct(@Param("id") id: string) {
        this.productService.deleteProduct(id)
    }

}