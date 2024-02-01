import { Injectable } from '@nestjs/common';
import convertToSlug from '../utils/convertToSlug';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category-dto';
import { UpdateCategoryDto } from './dto/update-category-dto';

@Injectable()
export class CategoriesService {
    constructor(private prisma: PrismaService) { }

    getAllCategories() {
        return this.prisma.category.findMany()
    }

    getOneCategory(id: string) {
        return this.prisma.category.findUnique({
            where: { id: +id }
        })
    }

    async createCategory(dto: CreateCategoryDto, file: Express.Multer.File) {
        return await this.prisma.category.create({
            data: {
                name: dto.name,
                slug: convertToSlug(dto.name),
                image: `${file.destination}/${file.originalname}`,
            }
        })
    }

    async updateCategory(dto: UpdateCategoryDto, newImage?: Express.Multer.File) {
        const image = newImage ? `${newImage.destination}/${newImage.originalname}` 
        : await this.prisma.category.findUnique({where: {id: +dto.id}}).then(category => category.image)

        return this.prisma.category.update({
            where: { id: dto.id },
            data: {
                name: dto.name,
                slug: convertToSlug(dto.name),
                image: image
            }
        })
    }

    deleteCategory(id: string) {
        return this.prisma.category.delete({
            where: { id: +id }
        })
    }
}
