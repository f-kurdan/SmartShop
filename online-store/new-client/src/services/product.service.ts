import { products } from "@/data";

export function getProducts(page?: number, query?: string) {
    console.log(page)
    const productsStart = page === undefined || 1? 0 : (page * 12) - 1;
    const productsEnd = productsStart? productsStart + 12 : 12
    if (query)
        return Promise.resolve(products.filter(p => p.name.toLowerCase().includes(query.toLowerCase())).slice(productsStart, productsEnd));
    return Promise.resolve(products)
}

export function getProductByCategory(categoryId: string) {
    return Promise.resolve(products.filter(p => p.category_id.toString() === categoryId))
}

export function getProductById(productId: string) {
    return Promise.resolve(products.find(p => p.id.toString() === productId))
}