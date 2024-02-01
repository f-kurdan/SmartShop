import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class UpdateCategoryDto {
    @ApiProperty()
    @IsNumber()
    @Transform(params  => parseInt(params.value))
    id: number
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    name: string
}