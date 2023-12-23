import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateUserDTO } from "./dto/createUserDto";

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

    createUser(dto: CreateUserDTO) {
        return this.prisma.user.create({
            data: { 
                username: dto.name,
                email: dto.email,
                password: dto.password,
            }
        })
    }

    updateUser(id: string, dto: CreateUserDTO) {
        return this.prisma.user.update({
            where : { id: +id}, 
            data: {
                username: dto.name,
                email: dto.email,
                password: dto.password,
            }
        })
    }
}