import { categories } from "@/data";

class categoryService {
    async getCategories() {
        const res = await fetch('http://localhost:3000/categories');
        const data: { } = await res.json();
        return data;
    }

    async getCategoryById(id: string) {
        return Promise.resolve(categories.filter(c => c.id.toString() === id));
    }
}

export default new categoryService();