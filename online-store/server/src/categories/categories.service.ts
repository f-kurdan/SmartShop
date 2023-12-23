import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import convertToSlug from '../utils/convertToSlug';
import { CreateCategoryDto } from './dto/createCategoryDto';
@Injectable()
export class CategorysService {
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
}
