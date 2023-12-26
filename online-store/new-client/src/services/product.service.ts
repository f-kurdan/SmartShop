import { product } from "../types";

// import { products } from "@/data";
export async function getProducts(page?: number, query?: string, categoriesId?: number[], brands?: number[], color?: string[], specifications?: string[]) {

    const res = await fetch(`${process.env.NEXT_PUBLIC_STOREAPI_URL}/products?page=${page}`)
    const products: product[] = await res.json()

    return Promise.resolve({ products: products, totalProducts: products.length })
}

export async function getProduct(id:string) {
    // if (color && storageSize) {
    //     return Promise.resolve(products.find(p => (p.model.toLowerCase() === model.toLowerCase())
    //         && (p.color === color) && (p.storage.toString() === storageSize)));
    // }
    // else 
    const res = fetch(`${process.env.NEXT_PUBLIC_STOREAPI_URL}/products${id}`)
    return (await res).json()
}

// export function getAllProducts() {
//     return fetch('')
// }

// export function getProductsByName(string: string) {
//     return Promise.resolve(products.filter(p => p.name.toLowerCase().includes(string.toLowerCase())))
// }