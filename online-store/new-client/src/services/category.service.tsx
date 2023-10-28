import { categories } from "@/data";

class categoryService {
    async getCategories() {
        return Promise.resolve(categories);
    }

    async getCategoryById(slug: string) {
        return Promise.resolve(categories.filter(c => c.slug === slug));
    }
}

export default new categoryService();