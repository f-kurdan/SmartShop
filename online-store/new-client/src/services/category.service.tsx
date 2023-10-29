import { categories } from "@/data";

class categoryService {
    async getCategories() {
        return Promise.resolve(categories);
    }

    async getCategoryById(id: string) {
        return Promise.resolve(categories.filter(c => c.id.toString() === id));
    }
}

export default new categoryService();