import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateProductDto } from "./dto/create-product.dto";

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaService) {}

    async findAllProducts() {
        return this.prisma.product.findMany();
    }
 
    async findOneProduct(id: number) {
        return this.prisma.product.findUnique({
            where: {
                id: id,
            }
        })
    }

    async create(createProductDto: CreateProductDto) {
        
        // const newProduct = await this.prisma.product.create({
        //     data: 
        // })
    }
}