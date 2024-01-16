import { ApiProperty } from "@nestjs/swagger";
import { Expose, Transform, Type } from "class-transformer";
import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength, ValidateNested } from "class-validator";

class ProductInfo {
    @Expose()
    name: string;
    @Expose()
    description: string;
}
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
    @Type(() => ProductInfo)
    //@ValidateNested()
    // @ArrayMinSize(1)
    productInfo: ProductInfo[]
}