import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateProductDto } from "./dto/create-product.dto";

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaService) {}

    async getAllProducts() {
        return this.prisma.product.findMany();
    }
 
    async getProduct(id: number) {
        return this.prisma.product.findUnique({
            where: {
                id: id
            }
        })
    }

    async create(createProductDto: CreateProductDto) {
        
        // const newProduct = await this.prisma.product.create({
        //     data: 
        // })
    }

    getAllProducts() {
    }
}