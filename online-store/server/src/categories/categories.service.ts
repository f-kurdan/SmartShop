import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import convertToSlug from '../utils/convertToSlug';
import { CreateCategoryDto } from './dto/create-category-dto';
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

    createCategory(dto: CreateCategoryDto) {
        return this.prisma.category.create({
            data: {
                name: dto.name,
                slug: convertToSlug(dto.name)
            }
        })
    }

    updateCategory(id: string, dto: CreateCategoryDto) {
        return this.prisma.category.update({
            where : { id: +id}, 
            data: {
                name: dto.name,
            }
        })
    }

    deleteCategory(id: string) {
        return this.prisma.category.delete({
            where: { id: +id }
        })
    }
}
