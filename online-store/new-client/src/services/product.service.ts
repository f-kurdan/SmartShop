import { products } from "@/data";

export function getProducts() {
    return Promise.resolve(products);
}

export function getProductByCategory(categoryId: string) {
    return Promise.resolve(products.filter(p => p.category_id.toString() === categoryId))
}

export function getProductById(productId:string) {
    return Promise.resolve(products.find(p => p.id.toString() === productId))
}