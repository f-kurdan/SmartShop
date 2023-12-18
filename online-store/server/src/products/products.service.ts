import { Injectable } from "@nestjs/common";
import { Product } from "src/products/interfaces/product.interface";

@Injectable()
export class ProductsService {
    private products: Product[] = []
    create(product: Product) {
        this.products.push(product);
    }

    getAllProducts() {
        return this.products;
    }
}