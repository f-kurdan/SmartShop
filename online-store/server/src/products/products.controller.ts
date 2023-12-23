import { Controller, Get, Post, HttpCode, Param, Body, Put, Patch } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';

@Controller("products")
export class ProductsController {
    constructor (private productService: ProductsService) {}
    @Get()
    getAllProducts () {
        return this.productService.findAllProducts();
    }

    @Get(':slug')
    getOneProduct(@Param('slug') slug: string) {
        return this.productService.findOneProduct(slug)
    }

    @Post()
    @HttpCode(204)
    createProduct(@Body() createProductDto: CreateProductDto) {
        this.productService.createProduct(createProductDto)
    }

    @Patch(':id')
    updateProduct(@Param("id") id: string, @Body() updateProductDTO: CreateProductDto) {
        this.productService.update(Number(id), updateProductDTO)
    }

}