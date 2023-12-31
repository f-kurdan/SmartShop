import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, MinLength } from "class-validator";

export class UpdateProductDto {
    @ApiProperty()
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    name: string;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    price: number;

    @ApiProperty()
    @IsOptional()
    @IsObject()
    category: {
        name: string;
        slug: string;
    };

    @ApiProperty()
    @IsOptional()
    @IsObject()
    brand: {
        name: string;
        slug: string;
    };

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    quantity: number;

    @ApiProperty()
    @IsOptional()
    images: string[];

    @ApiProperty()
    @IsOptional()
    @IsObject()
    productInfo: [{
        name: string;
        description: string;
    }]
}