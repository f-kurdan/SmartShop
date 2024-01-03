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
       const res = await fetch(cataegoriesURL, {
            method: "POST",
            body: formData
        })

        if (!res.ok)
        throw new Error('Не удалось загрузить файл');
    }
}

export default new categoryService();