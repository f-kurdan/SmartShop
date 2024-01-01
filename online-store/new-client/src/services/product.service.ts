import { product, productsList } from "../types";

// import { products } from "@/data";
export async function getProducts(page?: number, searchTerm?: string, categories?: string[], brands?: string[],  specifications?: string[]) {
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

export async function getProduct(slug:string, color?: string, storageSize?: string):  Promise<product> {
    const res = fetch(`${process.env.NEXT_PUBLIC_STOREAPI_URL}/products/${slug}`)
    return (await res).json()
}

// export function getAllProducts() {
//     return fetch('')
// }

export function getProductsByName(name: string) { 
    const res = fetch(`${process.env.NEXT_PUBLIC_STOREAPI_URL}/products/name/${name}`)
}