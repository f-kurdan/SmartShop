import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user-dto";
import { UpdateUserDto } from "./dto/update-user-dto";
import * as bcrypt from 'bcrypt';

export const roundsOfHashing = 10;

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    async createUser(dto: CreateUserDto) {
        const hashedPassword = await bcrypt.hash(
            dto.password,
            roundsOfHashing,
        );

        dto.password = hashedPassword;

        return this.prisma.user.create({
            data: dto
        })
    }

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

    async getOneUser(id: number) {
        return await this.prisma.user.findUnique({
            where: { id: id },
            select: {
                username: true,
                email: true,
                role: true,
                orders: true,
            }
        })
    }

    async updateUser(id: string, dto: UpdateUserDto) {
        if (dto.password) {
            dto.password = await bcrypt.hash(
                dto.password,
                roundsOfHashing,
            );
        }

        return this.prisma.user.update({
            where: { id: +id },
            data: dto
        })
    }

    deleteUser(id: string) {
        return this.prisma.user.delete({
            where: { id: +id }
        })
    }
}