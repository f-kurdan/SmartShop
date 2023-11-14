import { products } from "@/data";

export function getProducts(query?: string) {
    console.log('here: ' + query)
    if (query)
        return Promise.resolve(products.filter(p => p.name.toLowerCase().includes(query.toLowerCase())));
    return Promise.resolve(products)
}

export function getProductByCategory(categoryId: string) {
    return Promise.resolve(products.filter(p => p.category_id.toString() === categoryId))
}

export function getProductById(productId: string) {
    return Promise.resolve(products.find(p => p.id.toString() === productId))
}