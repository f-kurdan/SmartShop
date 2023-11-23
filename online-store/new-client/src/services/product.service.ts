import { products } from "@/data";

export function getProducts(page?: number, query?: string) {
    console.log('zashel page: ' + page)
    const productsEnd = page ? page * 12 : 12;
    const productsStart = productsEnd - 12
    console.log(`start: ${productsStart} end: ${productsEnd}`)
    if (query)
        return Promise.resolve(products.filter(p => p.name.toLowerCase().includes(query.toLowerCase())).slice(productsStart, productsEnd));
    return Promise.resolve(products.slice(productsStart, productsEnd))
}

export function getTotalProducts() {
    return Promise.resolve(products.length)
}

export function getProductByCategory(categoryId: string) {
    return Promise.resolve(products.filter(p => p.category_id.toString() === categoryId))
}

export function getProductById(productId: string) {
    return Promise.resolve(products.find(p => p.id.toString() === productId))
}