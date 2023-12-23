import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateUserDTO } from "./dto/createUserDto";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    getAllUsers() {
        return this.usersService.getAllUsers();
    }
    
    @Get(':id')
    getOneUser(@Param('id') id: string) {
        return this.usersService.getOneUser(Number(id));
    }

    @Post()
    createUser(@Body() dto: CreateUserDTO) {
        return this.usersService.createUser(dto)
    }
}