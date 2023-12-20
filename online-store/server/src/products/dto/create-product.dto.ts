export class CreateProductDto {
    name: string; price: number; category: string; brand: string; payementMethod: string; shippingMethod: string; stock:number; images: string[]; specs: object[]
    // specifications: Object[]
}