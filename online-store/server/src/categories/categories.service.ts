import { Injectable } from '@nestjs/common';
import convertToSlug from '../utils/convertToSlug';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category-dto';
import { UpdateCategoryDto } from './dto/update-category-dto';
import fs from 'fs';

@Injectable()
export class CategoriesService {
    constructor(private prisma: PrismaService) { }

    async getAllCategories() {
        return await this.prisma.category.findMany({
            orderBy: { name: 'desc' }
        })
    }

    async getOneCategory(id: string) {
        return await this.prisma.category.findUnique({
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

    async deleteCategory(id: number) {
        const category = await this.prisma.category.findUnique({ where: { id: id } })

        fs.unlink(category.image, (err => {
            if (err) console.log(err);
            else {
                console.log("\nDeleted file: " + category.image);
            }
        }))
        
        return await this.prisma.category.delete({
            where: { id: +id }
        })
    }
}
