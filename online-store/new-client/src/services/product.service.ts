import { product } from "../types";

// import { products } from "@/data";
export async function getProducts(page?: number, searchTerm?: string, categories?: string[], brands?: string[],  specifications?: string[]) {
    const searchParams = new URLSearchParams();
    if (page) searchParams.append('page', page.toString());
    if (searchTerm) searchParams.append('search_term', searchTerm);
    if (categories) searchParams.append('categories', categories.join('%2C'))
    if (brands) searchParams.append('brands', brands.join('%2C'))
    if (specifications) searchParams.append('specs', specifications.join('%2C'))

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