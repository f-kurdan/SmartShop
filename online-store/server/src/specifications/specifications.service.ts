import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SpecificationsService {
    constructor(private prismaService: PrismaService) { }

    getAll(categories?: string[]) {
        const filter = categories ? {
            products: {
                some: {
                    category: {
                        slug: {
                            in: [...categories]
                        }
                    }
                }
            }
        } : {}
        
        return this.prismaService.productInfo.findMany({
            where: {...filter},
            distinct: ['name', "description"],
        })
    }
}
