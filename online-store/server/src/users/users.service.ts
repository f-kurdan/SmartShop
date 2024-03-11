import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user-dto";
import { UpdateUserDto } from "./dto/update-user-dto";
import * as bcrypt from 'bcrypt';
import { JwtService } from "@nestjs/jwt";

export const roundsOfHashing = 10;

@Injectable()
export class UsersService {
    constructor(
        private prisma: PrismaService,
        private readonly jwtService: JwtService
    ) { }

    async createUser(dto: CreateUserDto) {
        const existingUser = await this.prisma.user.findUnique({
            where: { email: dto.email },
        });

        if (existingUser) {
            throw new BadRequestException('Email already in use');
        }

        const hashedPassword = await bcrypt.hash(
            dto.password,
            roundsOfHashing,
        );

        dto.password = hashedPassword;
        const user = await this.prisma.user.create({
            data: dto,
            select: {
                id: true,
                username: true,
                email: true,
                role: true,
                phone: true,
                orders: true
            }
        })

        return {
            accessToken: this.jwtService.sign({ userId: user.id, sub: user.username })
        }
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