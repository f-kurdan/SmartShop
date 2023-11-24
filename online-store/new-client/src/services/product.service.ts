import { products } from "@/data";

export function getProducts(page?: number, query?: string) {
    const productsEnd = page ? page * 12 : 12;
    const productsStart = productsEnd - 12
    if (query) {
        const filteredProducts = products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
        return Promise.resolve({ products: filteredProducts.slice(productsStart, productsEnd), totalProducts: filteredProducts.length });
    }
    return Promise.resolve({ products: products.slice(productsStart, productsEnd), totalProducts: products.length })
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