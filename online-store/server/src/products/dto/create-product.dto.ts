import { ApiProperty } from "@nestjs/swagger";
import { Expose, Transform, TransformationType, Type } from "class-transformer";
import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength, ValidateNested } from "class-validator";

export class CreateProductDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    name: string;

    @ApiProperty()
    @IsNumber()
    @Transform(params  => parseInt(params.value))
    price: number;

    @ApiProperty()
    @IsString()
    categorySlug: string;

    @ApiProperty()
    @IsString()
    brandSlug: string;

    @ApiProperty()
    @IsNumber()
    @Transform(params  => parseInt(params.value))
    quantity: number;

    @ApiProperty()
    @IsArray()
    @Transform(params  => (params.value.map((info) => {
        if (params.type === TransformationType.PLAIN_TO_CLASS)
            return JSON.parse(info)
        return info
        })))
    productInfo: [{
        name: string;
        description: string;
    }]
}