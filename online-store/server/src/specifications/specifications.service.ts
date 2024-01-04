import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SpecificationsService {
    constructor(private prismaService: PrismaService){}

    getAll(category: string) {
        return this.prismaService.productInfo.findMany({
            where: {
                products: {
                    some: {
                        category: {
                            name: category
                        }
                    }
                }
            }
        })
    }
}
