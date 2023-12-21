import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}
    getAllUsers() {
        return this.prisma.user.findMany();
    }

    getOneUser(id: number) {
        return this.prisma.user.findUnique({ where: { id: id} })
    }
}