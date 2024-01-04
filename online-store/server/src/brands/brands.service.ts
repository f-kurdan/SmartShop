import { Injectable } from '@nestjs/common';
import convertToSlug from '../utils/convertToSlug';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBrandDto } from './dto/create-brand-dto';

@Injectable()
export class BrandsService {
    constructor(private prisma: PrismaService) { }

    getAllBrands() {
        return this.prisma.brand.findMany()
    }

    getOneBrand(id: string) {
        return this.prisma.brand.findUnique({
            where: { id: +id }
        })
    }

    createBrand(dto: CreateBrandDto) {
        return this.prisma.brand.create({
            data: {
                name: dto.name,
                slug: convertToSlug(dto.name)
            }
        })
    }

    updateBrand(id: string, dto: CreateBrandDto) {
        return this.prisma.brand.update({
            where : { id: +id}, 
            data: {
                name: dto.name,
            }
        })
    }

    deleteBrand(id: string) {
        return this.prisma.brand.delete({
            where: { id: +id }
        })
    }
}
