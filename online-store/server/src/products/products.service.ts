import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product-dto";
import { Prisma } from "@prisma/client";
import convertToSlug from "../utils/convertToSlug";
import fs from "fs";

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaService) { }

    async findProducts(page: number, searchTerm: string, categoriesSlugs?: string[], brandsSlugs?: string[], specs?: string[]) {

        const categoriesFilter: Prisma.ProductWhereInput = categoriesSlugs?.length ? {
            category: {
                slug: {
                    in: categoriesSlugs
                }
            }
        } : {}

        const brandsFilter: Prisma.ProductWhereInput = brandsSlugs?.length ? {
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
        return await this.prisma.product.findUnique({
            where: {
                slug: slug,
            },
            include: {
                productInfo: true,
            }
        })
    }

    async findOneProductById(id: string) {
        return this.prisma.product.findUnique({
            where: {
                id: +id,
            },
            include: {
                productInfo: true
            }
        })
    }

    async findOneProductsByName(name: string, color?: string, storageSize?: string) {
        const colorFilter = color ? {
            productInfo: {
                some: {
                    description: color
                }
            }
        } : {}

        const storageFilter = storageSize ? {
            productInfo: {
                some: {
                    description: storageSize
                }
            }
        } : {}

        return await   this.prisma.product.findMany({
            where: {
                name: name,
                ...colorFilter,
                ...storageFilter
            },
            include: {
                productInfo: true
            }
        })
    }

    // async findProductByCategory(categorySlug: string) {

    // }

    async createProduct(dto: CreateProductDto, images: Express.Multer.File[]) {
        // const specs = dto.productInfo.map(spec => JSON.parse(spec))
        // console.log('specs', specs)
        console.log(dto.productInfo)
        const colorInfo = dto.productInfo.find(i => i.name === 'Цвет')?.description ?? '';
        const storageInfo = dto.productInfo.find(i => i.name === 'Память')?.description ?? '';

        console.log(dto.productInfo)

        await this.prisma.product.create({
            data: {
                name: dto.name,
                price: dto.price,
                slug: convertToSlug(`${dto.name} ${colorInfo} ${storageInfo}`),
                SKU: Math.floor(Math.random() * 100000000000).toString(),
                images: images?.map(image => `${image.destination}/${image.originalname}`),
                quantity: dto.quantity,
                productInfo: {
                    create: dto.productInfo,
                },
                category: {
                    connect: { slug: dto.categorySlug }
                },
                brand: {
                    connect: { slug: dto.brandSlug }
                }
            }
        })
    }



    async updateProduct(id: string, dto: UpdateProductDto) {
        const colorInfo = dto.productInfo.find(i => i.name === 'Цвет').description;
        const storageInfo = dto.productInfo.find(i => i.name === 'Память').description;

        await this.prisma.product.update({
            where: {
                id: +id,
            },
            data: {
                name: dto.name,
                price: dto.price,
                slug: convertToSlug(`${dto.name} ${colorInfo} ${storageInfo}`),
                SKU: Math.floor(Math.random() * 100000000000).toString(),
                quantity: dto.quantity,
                productInfo: {
                    create: dto.productInfo,
                },
                category: {
                    connect: { name: dto.category.name }
                },
                brand: {
                    connect: { name: dto.brand.name }
                }
            }
        })
    }

    async deleteProduct(id: string) {
        const product = await this.prisma.product.findUnique({
            where: {id: +id}
        })

        product.images.forEach(image => fs.unlink(image, (err => {
            if (err) console.log(err);
            else {
                console.log("\nDeleted file: " + image);
            }
        })))
        
        return await this.prisma.product.delete({
            where: {
                id: +id,
            }
        })
    }
}