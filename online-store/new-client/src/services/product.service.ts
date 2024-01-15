import { FetchError, product, productsList } from "../types";

class productService {
    async getProducts(page?: number, searchTerm?: string, categories?: string[], brands?: string[], specifications?: string[]) {
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

    async getProduct(slug: string, color?: string, storageSize?: string) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_STOREAPI_URL}/products/${slug}`)
        const data = await res.json();
        return data;
    }

    async getProductsByName(name?: string, color?: string, storageSize?: string): Promise<product[]> {
        const searchParams = new URLSearchParams();
        if (color) searchParams.append('color', color)
        if (storageSize) searchParams.append('storageSize', storageSize)
        const res = await fetch(`${process.env.NEXT_PUBLIC_STOREAPI_URL}/products/name/${name}?${searchParams}`);
        const data = await res.json();
        return data;
    }

    async createProduct(formData?: FormData) {
        return fetch(`${process.env.NEXT_PUBLIC_STOREAPI_URL}/products`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: formData?.get('name'),
                price: formData?.get('price'),
                brandSlug: formData?.get('brandSlug'),
                categorySlug: formData?.get('categorySlug'),
                images: formData?.getAll('images[]'),
                quantity: formData?.get('quantity'),
                productInfo: formData?.get('productInfo[]'),
            })
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