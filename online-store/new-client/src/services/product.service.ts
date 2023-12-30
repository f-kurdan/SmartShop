import { product } from "../types";

// import { products } from "@/data";
export async function getProducts(page = 1, searchTerm?: string, categories?: string[], brands?: string[],  specifications?: string[]) {
    const searchParams = new URLSearchParams();
    searchParams.append('page', page ? page.toString() : (1).toString());
    if (searchTerm) searchParams.append('search_term', searchTerm);
    if (categories) searchParams.append('category', categories.join(';'))
    if (brands) searchParams.append('brand', brands.join(';'))
    if (specifications) searchParams.append('specs', specifications.join(';'))

    const res = await fetch(`${process.env.NEXT_PUBLIC_STOREAPI_URL}/products?${searchParams}`)
    const data: { products: product[], totalPages: number } = await res.json()

    return { products: data.products, totalPages: data.totalPages }
}

export async function getProduct(id:string) {
    const res = fetch(`${process.env.NEXT_PUBLIC_STOREAPI_URL}/products${id}`)
    return (await res).json()
}

// export function getAllProducts() {
//     return fetch('')
// }

// export function getProductsByName(string: string) {
//     return Promise.resolve(products.filter(p => p.name.toLowerCase().includes(string.toLowerCase())))
// }