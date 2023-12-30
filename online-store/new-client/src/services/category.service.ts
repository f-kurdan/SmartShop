import { category } from "../types";

class categoryService {
    async getCategories() {
        const res = await fetch('http://localhost:5000/categories');
        const data: category[] = await res.json();
        return data;
    }

    async getCategoryById(id: string) {
        // return Promise.resolve(categories.filter(c => c.id.toString() === id));
    }
}

export default new categoryService();