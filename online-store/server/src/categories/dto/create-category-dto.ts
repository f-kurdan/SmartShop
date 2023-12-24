import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateCategoryDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    name: string
}