import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, MinLength } from "class-validator";

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
        slug: string;
    };

    @ApiProperty()
    @IsObject()
    brand: {
        name: string;
        slug: string;
    };

    @ApiProperty()
    @IsNumber()
    quantity: number;

    @ApiProperty()
    @IsOptional()
    images: string[];

    @ApiProperty()
    @IsObject()
    productInfo: {
        name: string;
        description: string;
    }
}