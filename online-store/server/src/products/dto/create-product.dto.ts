import { ApiProperty } from "@nestjs/swagger";

type ProductInfo = [{
  name: string;
  description: string;
}
]
export class CreateProductDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    price: number;
    @ApiProperty()
    category: {
        name: string;
        slug: string;
    };
    @ApiProperty()
    brand: {
        name: string;
        slug: string;
    };
    @ApiProperty()
    quantity: number;
    @ApiProperty()
    images: string[];
    @ApiProperty()
    productInfo: ProductInfo;
}