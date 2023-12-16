import { Controller, Get, Post, HttpCode, Param, Body } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

@Controller("products")
export class ProductsController {
    @Get()
    findAll (): string {
        return 'Return all products'
    }

    @Get(':id')
    FindOne(@Param('id') id: string) {
        return `this action will return product with id: ${id}`
    }

    @Post()
    @HttpCode(204)
    create(@Body() CreateProductDto: CreateProductDto): string {
        console.log('Create new product' + `${CreateProductDto}`)
        return ''
    }

}