import { ApiProperty, PartialType } from "@nestjs/swagger";
import { Transform, TransformationType } from "class-transformer";
import { IsArray, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, MinLength } from "class-validator";
import { CreateProductDto } from "./create-product.dto";

export class UpdateProductDto extends PartialType(CreateProductDto) {
    @ApiProperty()
    @IsNumber()
    @Transform(params  => parseInt(params.value))
    id: number
}