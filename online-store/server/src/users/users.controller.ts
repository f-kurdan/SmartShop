import { Body, Controller, Get, Param, Post, Patch, Delete, ParseIntPipe, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { CreateUserDto } from "./dto/create-user-dto";
import { UpdateUserDto } from "./dto/update-user-dto";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    @UseGuards(JwtAuthGuard)
    getAllUsers() {
        return this.usersService.getAllUsers();
    }
    
    @Get(':id')
    @UseGuards(JwtAuthGuard)
    getOneUser(@Param('id', ParseIntPipe) id: string) {
        return this.usersService.getOneUser(Number(id));
    }

    @Post()
    createUser(@Body() dto: CreateUserDto) {
        return this.usersService.createUser(dto)
    }

    @Patch(':id')
    @UseGuards(JwtAuthGuard)
    updateUser(@Param('id', ParseIntPipe) id: string, dto: UpdateUserDto) {
        return this.usersService.updateUser(id, dto)
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    deleteUser(@Param('id', ParseIntPipe) id: string) {
        return this.usersService.deleteUser(id)
    }
}