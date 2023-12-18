import { Controller, Get, Post, HttpCode, Param, Body } from '@nestjs/common';
import { Product } from 'src/products/interfaces/product.interface';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';

@Controller("products")
export class ProductsController {
    constructor (private productService: ProductsService) {}
    @Get()
    findAll (): Product[] {
        return this.productService.getAllProducts();
    }

    @Get(':id')
    FindOne(@Param('id') id: string) {
        return `this action will return product with id: ${id}`
    }

    @Post()
    @HttpCode(204)
    create(@Body() createProductDto: CreateProductDto) {
        console.log('Create new product' + `${createProductDto}`)
        this.productService.create(createProductDto)
    }

}