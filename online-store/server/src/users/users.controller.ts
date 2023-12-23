import { Body, Controller, Get, Param, Post, Patch, Delete, ParseIntPipe } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user-dto";
import { UsersService } from "./users.service";
import { UpdateUserDto } from "./dto/update-user-dto";

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    getAllUsers() {
        return this.usersService.getAllUsers();
    }
    
    @Get(':id')
    getOneUser(@Param('id', ParseIntPipe) id: string) {
        return this.usersService.getOneUser(Number(id));
    }

    @Post()
    createUser(@Body() dto: CreateUserDto) {
        return this.usersService.createUser(dto)
    }

    @Patch(':id')
    updateUser(@Param('id', ParseIntPipe) id: string, dto: UpdateUserDto) {
        return this.usersService.updateUser(id, dto)
    }

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: string) {
        return this.usersService.deleteUser(id)
    }
}