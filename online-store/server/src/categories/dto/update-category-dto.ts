import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class UpdateCategoryDto {
    @ApiProperty()
    @IsNumber()
    id: number
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    name: string
}