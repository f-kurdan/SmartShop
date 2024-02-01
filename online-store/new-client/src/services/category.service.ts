import { category, FetchError } from "../types";

const categoriesURL = `${process.env.NEXT_PUBLIC_STOREAPI_URL}/categories`

class categoryService {
    async getCategories() {
        const res = await fetch(categoriesURL);
        const data: category[] = await res.json();
        return data;
    }

    async getCategoryById(id: string) {
        // return Promise.resolve(categories.filter(c => c.id.toString() === id));
    }

    async createCategory(formData?: FormData) {
        return await fetch(categoriesURL, {
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

    async updateCategory(formData?: FormData) {
        return await fetch(categoriesURL, {
            method: "PUT",
            body: formData
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new FetchError(res)
            }
        })
    }

    async deleteCategory(id: number) {
        return await fetch(`${categoriesURL}/${id}`, {
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

export default new categoryService();