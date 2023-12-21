export class CreateProductDto {
    name: string; 
    price: number; 
    category: string;
    brand: string;
    quantity: number;
    images: string[];
    productInfo: Object[];
}