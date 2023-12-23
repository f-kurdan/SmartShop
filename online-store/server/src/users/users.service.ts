import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user-dto";

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}
    getAllUsers() {
        return this.prisma.user.findMany({
            select: {
                username: true,
                email: true,
                role: true,
                orders: true,
            } 
        });
    }

    getOneUser(id: number) {
        return this.prisma.user.findUnique({ 
            where: { id: id},
            select: {
                username: true,
                email: true,
                role: true,
                orders: true,
            } })
    }

    createUser(dto: CreateUserDto) {
        return this.prisma.user.create({
            data: { 
                username: dto.name,
                email: dto.email,
                password: dto.password,
                phone: dto.phone,
            }
        })
    }

    updateUser(id: string, dto: CreateUserDto) {
        return this.prisma.user.update({
            where : { id: +id}, 
            data: {
                username: dto.name,
                email: dto.email,
                password: dto.password,
            }
        })
    }

    deleteUser(id: string) {
        return this.prisma.user.delete({
            where: { id: +id }
        })
    }
}