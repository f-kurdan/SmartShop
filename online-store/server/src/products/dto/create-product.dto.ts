import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, MinLength } from "class-validator";


type ProductInfo = {
    name: string;
    description: string;
}[]

export class CreateProductDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    name: string;

    @ApiProperty()
    @IsNumber()
    price: number;

    @ApiProperty()
    @IsObject()
    category: {
        name: string;
    };

    @ApiProperty()
    @IsObject()
    brand: {
        name: string;
    };

    @ApiProperty()
    @IsNumber()
    quantity: number;

    @ApiProperty()
    @IsOptional()
    images: string[];

    @ApiProperty()
    @IsArray()
    productInfo: [{
        name: string;
        description: string;
    }]
}