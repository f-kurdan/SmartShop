import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateProductDto } from "./dto/create-product.dto";

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaService) {}

    async getProduct(id: number) {
        return this.prisma.product.findUnique({
            where: {
                id: id
            }
        })
    }

    async create(createProductDto: CreateProductDto) {
        
        const newProduct = await this.prisma.product.create({
            data: 
        })
    }

    getAllProducts() {
    }
}