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

    createCategory(formData?: FormData) {
        return fetch(cataegoriesURL, {
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
}

export default new categoryService();