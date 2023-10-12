import { Controller, Get, Param, Post, Body, Put } from "@nestjs/common";
import { User } from "src/models/user.model";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
 
@Controller('users')
export class UsersController {
    constructor(private usersServise: UsersService) {}

    @Get(":id")
    get(@Param("id") id: string): User {
        return this.usersServise.getUser(id);
    }

    @Get()
    getAll(): User[] {
        return this.usersServise.getAllUsers();
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        
    }

    @Put()
    update(){}
}