import { Injectable } from '@nestjs/common';
import convertToSlug from '../utils/convertToSlug';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBrandDto } from './dto/create-brand-dto';
import { UpdateBrandDto } from './dto/update-brand-dto';

@Injectable()
export class BrandsService {
    constructor(private prisma: PrismaService) { }

    async getAllBrands() {
        return await this.prisma.brand.findMany({
            orderBy: { name: 'desc' }
        })
    }

    async getOneBrand(id: string) {
        return await this.prisma.brand.findUnique({
            where: { id: +id }
        })
    }

    async createBrand(dto: CreateBrandDto) {
        return await this.prisma.brand.create({
            data: {
                name: dto.name,
                slug: convertToSlug(dto.name)
            }
        })
    }

    async updateBrand(dto: UpdateBrandDto) {
        return await this.prisma.brand.update({
            where : { id: dto.id}, 
            data: {
                name: dto.name,
            }
        })
    }

    async deleteBrand(id: number) {
        return await this.prisma.brand.delete({
            where: { id: id }
        })
    }
}
