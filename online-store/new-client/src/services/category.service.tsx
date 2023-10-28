import { categories } from "@/data";

class categoryService {
    async getCategories() {
        return Promise.resolve(categories);
    }
}

export default new categoryService();