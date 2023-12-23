import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateProductDto } from "./dto/create-product.dto";
import convertToSlug from "../utils/convertToSlug";

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaService) {}

    async findAllProducts() {
        return this.prisma.product.findMany();
    }
 
    async findOneProduct(slug: string) {
        return this.prisma.product.findUnique({
            where: {
                slug: slug,
            }
        })
    }

    async createProduct(dto: CreateProductDto) {
        await this.prisma.product.create({
            data: {
                name: dto.name,
                price: dto.price,
                slug: convertToSlug(dto.name),
                SKU: Math.floor(Math.random() * 100000000000).toString(),
                images: dto.images,
                quantity: dto.quantity,
                productInfo: {
                    create: dto.productInfo,
                },
                category: {
                    connectOrCreate: {
                        where: { slug: dto.category.slug },
                        create: dto.category,
                    }
                },
                brand: {
                    connectOrCreate: {
                        where: {slug: dto.brand.slug},
                        create: dto.brand,
                    }
                }
            }
        })
    }

    async update(id: number, dto: CreateProductDto) { 
        await this.prisma.product.update({
            where: {
                id: id,
            },
            data: {
                name: dto.name,
                price: dto.price,
                slug: convertToSlug(dto.name),
                SKU: Math.floor(Math.random() * 100000000000).toString(),
                images: dto.images,
                quantity: dto.quantity,
                productInfo: {
                    create: dto.productInfo,
                },
                category: {
                    connectOrCreate: {
                        where: { slug: dto.category.slug },
                        create: dto.category,
                    }
                },
                brand: {
                    connectOrCreate: {
                        where: {slug: dto.brand.slug},
                        create: dto.brand,
                    }
                }
            }
        })
    }
}