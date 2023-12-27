import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateProductDto } from "./dto/create-product.dto";
import convertToSlug from "../utils/convertToSlug";
import { UpdateProductDto } from "./dto/update-product-dto";
import { Prisma } from "@prisma/client";

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaService) { }

    async findProducts(page: number, searchTerm: string, categoriesSlugs?: string[], brandsSlugs?: string[], specs?: string[]) {
        const categoriesFilter: Prisma.ProductWhereInput = !categoriesSlugs?.length ? {
            category: {
                slug: {
                    in: categoriesSlugs
                }
            }
        } : {}

        const brandsFilter: Prisma.ProductWhereInput = !brandsSlugs?.length ? {
            brand: {
                slug: {
                    in: brandsSlugs
                }
            }
        } : {}

        const specsFilter: Prisma.ProductWhereInput = specs ?
            {
                productInfo: {
                    some: {
                        description: {
                            in: specs,
                            mode: "insensitive",
                        }
                    }
                }
            } : {}


        const searchFilter: Prisma.ProductWhereInput = searchTerm ? {
            OR: [
                {
                    category: {
                        name: {
                            contains: searchTerm,
                            mode: "insensitive",
                        }
                    },
                },
                {
                    name: {
                        contains: searchTerm,
                        mode: "insensitive",
                    }
                },
            ],
        } : {}

        const prodsPerPage = 12;
        const offset = (page - 1) * prodsPerPage
        const totalPages = Math.ceil((await this.prisma.product.findMany()).length / prodsPerPage);
        const prods = await this.prisma.product.findMany({
            where: {
                ...searchFilter,
                ...categoriesFilter,
                ...brandsFilter,
                ...specsFilter,
            },
            skip: offset,
            take: prodsPerPage,
            include: {
                brand: true,
                category: true,
                productInfo: true,
            }
        })

        return { products: prods, totalPages: totalPages };
    }

    async findOneProduct(slug: string) {
        return this.prisma.product.findUnique({
            where: {
                slug: slug,
            }
        })
    }

    async findOneProductById(id: string) {
        return this.prisma.product.findUnique({
            where: {
                id: +id,
            }
        })
    }

    // async findProductByCategory(categorySlug: string) {

    // }

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
                        where: { name: dto.category.name },
                        create: {
                            name: dto.category.name,
                            slug: convertToSlug(dto.category.name)
                        },
                    }
                },
                brand: {
                    connectOrCreate: {
                        where: { name: dto.brand.name },
                        create: {
                            name: dto.brand.name,
                            slug: convertToSlug(dto.brand.name)
                        },
                    }
                }
            }
        })
    }



    async updateProduct(id: string, dto: UpdateProductDto) {
        await this.prisma.product.update({
            where: {
                id: +id,
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
                        where: { slug: dto.brand.slug },
                        create: dto.brand,
                    }
                }
            }
        })
    }

    async deleteProduct(id: string) {
        return this.prisma.product.delete({
            where: {
                id: +id,
            }
        })
    }
}