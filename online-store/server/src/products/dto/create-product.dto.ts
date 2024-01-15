import { ApiProperty } from "@nestjs/swagger";
import { Transform, Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, MinLength } from "class-validator";

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
    @IsOptional()
    images: string[];

    @ApiProperty()
    @IsObject({each: true})
    // @ArrayMinSize(1)
    productInfo: [{
        name: string;
        description: string;
    }]
}