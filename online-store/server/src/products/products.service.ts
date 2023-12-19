import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/data/prisma.service";
import { Product } from "src/products/interfaces/product.interface";

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

    async create(product: Product) {
        
        return this.prisma.product.create({
            data: product
        })
    }

    getAllProducts() {
    }
}