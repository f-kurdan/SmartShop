import { products } from "@/data";

export function getProducts(page?: number, query?: string, categoryId?: number) {
    const productsEnd = page ? page * 12 : 12;
    const productsStart = productsEnd - 12

    let filteredProducts = products;

    if (categoryId) {
        filteredProducts = filteredProducts.filter(p => p.category_id === categoryId);
    }
    if (query) {
        filteredProducts = filteredProducts.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
    }

    return Promise.resolve({ products: filteredProducts.slice(productsStart, productsEnd), totalProducts: filteredProducts.length })
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