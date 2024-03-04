import { FetchError, product } from "../types";

const productsURL = `${process.env.NEXT_PUBLIC_STOREAPI_URL}/products`;

class productService {
    async getProducts(page?: number, limit?: number, searchTerm?: string, categories?: string[], brands?: string[], specifications?: string[]) {
        const searchParams = new URLSearchParams();
        searchParams.append('page', page ? page.toString() : (1).toString());
        if (limit) searchParams.append('limit', limit.toString());
        if (searchTerm) searchParams.append('search_term', searchTerm);
        if (categories) searchParams.append('category', categories.join(';'))
        if (brands) searchParams.append('brand', brands.join(';'))
        if (specifications) searchParams.append('specs', specifications.join(';'))

        const res = await fetch(`${process.env.NEXT_PUBLIC_STOREAPI_URL}/products?${searchParams}`)
        const data: { products: product[], totalPages: number } = await res.json()

        return { products: data.products, totalPages: data.totalPages }
    }

    async getProduct(slug: string): Promise<product> {
        const res = await fetch(`${productsURL}/${slug}`)
        const data = await res.json();
        return data;
    }

    async getProductsByName(name?: string, color?: string, storageSize?: string): Promise<product[]> {
        const searchParams = new URLSearchParams();
        if (color) 
            searchParams.append('color', color)
        if (storageSize) 
            searchParams.append('storageSize', storageSize)
        const res = await fetch(`${productsURL}/name/${name}?${searchParams}`);
        const data = await res.json();
        return data;
    }

    async createProduct(formData?: FormData) {
        return await fetch(productsURL, {
            method: "POST",
            body: formData
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new FetchError(res)
            }
        })
    }

    async updateProduct(formData?: FormData) {
        return await fetch(productsURL, {
            method: "PATCH",
            body: formData
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new FetchError(res)
            }
        })
    }

    async deleteProduct(id: number) {
        return await fetch(`${productsURL}/${id}`, {
            method: "DELETE",
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new FetchError(res)
            }
        })
    }
}

export default new productService()