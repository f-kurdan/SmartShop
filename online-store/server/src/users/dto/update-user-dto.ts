import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class UpdateUserDto {
    @ApiProperty()
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    name: string;

    @ApiProperty()
    @IsOptional()
    @IsNotEmpty()
    @IsEmail()
    email: string;


    @ApiProperty()
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    password: string;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    @IsNotEmpty()
    @MinLength(11)
    phone: number;
}