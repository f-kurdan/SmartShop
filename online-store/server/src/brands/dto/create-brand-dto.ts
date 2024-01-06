import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateBrandDto {
    @ApiProperty()
    @MinLength(3)
    @IsNotEmpty()
    @IsString()
    name: string
}