import { ApiProperty } from "@nestjs/swagger";
import { Transform, TransformationType } from "class-transformer";
import { IsArray, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, MinLength } from "class-validator";

export class UpdateProductDto {
    @ApiProperty()
    @IsNumber()
    @Transform(params  => parseInt(params.value))
    id: number

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @IsOptional()
    name: string;

    @ApiProperty()
    @IsNumber()
    @Transform(params  => parseInt(params.value))
    @IsOptional()
    price: number;

    @ApiProperty()
    @IsString()
    @IsOptional()
    categorySlug: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    brandSlug: string;

    @ApiProperty()
    @IsNumber()
    @Transform(params  => parseInt(params.value))
    @IsOptional()
    quantity: number;

    @ApiProperty()
    @IsArray()
    @IsOptional()
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