import { Controller, Get, Post, HttpCode, Param, Body } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';

@Controller("products")
export class ProductsController {
    constructor (private productService: ProductsService) {}
    @Get()
    getAll () {
        return this.productService.findAllProducts();
    }

    @Get(':id')
    getOne(@Param('id') id: string) {
        return this.productService.findOneProduct(Number(id))
    }

    @Post()
    @HttpCode(204)
    create(@Body() createProductDto: CreateProductDto) {
        console.log('Create new product: ' + `${createProductDto.productInfo[0]}`)
        // this.productService.create(createProductDto)
    }

}