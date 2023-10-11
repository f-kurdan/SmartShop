import { Controller, Get, Param, Post, Body } from "@nestjs/common";
import { User } from "src/models/user.model";
import { brotliDecompressSync } from "zlib";
import { UsersService } from "./users.service";
 
@Controller('users')
export class UsersController {
    constructor(private usersServise: UsersService) {}

    @Get(":id")
    get(@Param("id") id: string): User {
        return this.usersServise.getUser(id);
    }

    getAll(): User[] {
        return this.usersServise.getAllUsers();
    }

    // @Post()
    // post(@Body()) {

    // }
}