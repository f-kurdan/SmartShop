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
        await fetch(cataegoriesURL, {
            method: "POST",
            body: formData
        }).catch(error => {
            console.log("inside service:", error)
            throw new Error('File upload failed');})
    }
}

export default new categoryService();