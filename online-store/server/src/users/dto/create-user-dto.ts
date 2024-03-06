import { ApiProperty } from "@nestjs/swagger"
import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    username: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email: string;


    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;

    @ApiProperty()
    @IsNotEmpty()
    phone: string;
}