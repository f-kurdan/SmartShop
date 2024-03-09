import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { PrismaModule } from "../prisma/prisma.module";
import { UsersService } from "./users.service";
import { JwtModule } from "@nestjs/jwt";

export const jwtSecret = process.env.JWT_SECRET;

@Module({
    controllers: [UsersController],
    imports: [PrismaModule,
        JwtModule.register({
            secret: jwtSecret,
            signOptions: { expiresIn: '30d' },
        }),],
    providers: [UsersService],
    exports: [UsersService],
})
export class UsersModule { }