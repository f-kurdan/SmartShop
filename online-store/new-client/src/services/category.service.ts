import { category } from "../types";

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
        console.log(formData)
        await fetch(cataegoriesURL, {
            method: "POST",
            body: formData
        })
    }
}

export default new categoryService();