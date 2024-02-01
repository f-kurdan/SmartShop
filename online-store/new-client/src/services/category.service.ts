import { category, FetchError } from "../types";

const cataegoriesURL = 'http://localhost:5000/categories'

class categoryService {
    async getCategories() {
        const res = await fetch(cataegoriesURL);
        const data: category[] = await res.json();
        return data;
    }

    async getCategoryById(id: string) {
        // return Promise.resolve(categories.filter(c => c.id.toString() === id));
    }

    async createCategory(formData?: FormData) {
        return await fetch(cataegoriesURL, {
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
        return await fetch(cataegoriesURL, {
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
}

export default new categoryService();