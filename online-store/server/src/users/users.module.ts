import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { PrismaModule } from "../prisma/prisma.module";
import { UsersService } from "./users.service";
import AuthModule from "../auth/auth.module";

@Module({
    controllers: [UsersController],
    providers: [UsersService],
    imports: [PrismaModule],
    exports: [UsersService],
})
export class UsersModule {}