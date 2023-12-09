import { products } from "@/data";

export function getProducts(page?: number, query?: string, categoriesId?: number[], brands?: number[], color?: string[], specifications?: string[]) {
    const productsEnd = page ? page * 12 : 12;
    const productsStart = productsEnd - 12

    let filteredProducts = [...products].reverse();

    if (categoriesId) {
        filteredProducts = filteredProducts.filter(p => categoriesId.some(id => id === p.category_id));
    }

    if (brands) {
        filteredProducts = filteredProducts.filter(p => brands.some(id => id === p.brand_id));
    }

    if (color) {
        filteredProducts = filteredProducts.filter(p => color.some(color => color === p.color))
    }

    if (specifications) {
        filteredProducts = filteredProducts.filter(product => product.specifications.some(productChar => specifications.some(char => productChar.value.includes(char))))
    }

    if (query) {
        filteredProducts = filteredProducts.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
    }

    return Promise.resolve({ products: filteredProducts.slice(productsStart, productsEnd), totalProducts: filteredProducts.length })
}

export function getProduct(model: string, color?: string, storageSize?: string) {
    if (color && storageSize) {
        return Promise.resolve(products.find(p => (p.model.toLowerCase() === model.toLowerCase())
            && (p.color === color) && (p.storage.toString() === storageSize)));
    }
    else 
    return Promise.resolve(products.find(p => p.model === model))
}

export function getAllProducts() {
    return Promise.resolve(products)
}

export function getProductsByName(string: string) {
    return Promise.resolve(products.filter(p => p.name.toLowerCase().includes(string.toLowerCase())))
}