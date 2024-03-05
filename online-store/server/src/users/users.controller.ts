import { Body, Controller, Get, Param, Post, Patch, Delete, ParseIntPipe, UseGuards } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user-dto";
import { UsersService } from "./users.service";
import { UpdateUserDto } from "./dto/update-user-dto";
import { AuthGuard } from "@nestjs/passport";

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    @UseGuards(AuthGuard)
    getAllUsers() {
        return this.usersService.getAllUsers();
    }
    
    @Get(':id')
    @UseGuards(AuthGuard)
    getOneUser(@Param('id', ParseIntPipe) id: string) {
        return this.usersService.getOneUser(Number(id));
    }

    @Post()
    createUser(@Body() dto: CreateUserDto) {
        return this.usersService.createUser(dto)
    }

    @Patch(':id')
    @UseGuards(AuthGuard)
    updateUser(@Param('id', ParseIntPipe) id: string, dto: UpdateUserDto) {
        return this.usersService.updateUser(id, dto)
    }

    @Delete(':id')
    @UseGuards(AuthGuard)
    deleteUser(@Param('id', ParseIntPipe) id: string) {
        return this.usersService.deleteUser(id)
    }
}