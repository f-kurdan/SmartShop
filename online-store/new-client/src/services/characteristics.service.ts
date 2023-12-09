import { variations, variation_options } from "@/data";

export const getSpecifications = (categories?: string[]) => {
    const categoryVariations = categories ? variations.filter(v => categories.some(cat => cat === v.category_id.toString())) : variations;
    
    const result = categoryVariations.map(v => {
        const options = variation_options.filter(o => o.variation_id === v.id);
        return {
            id: v.id,
            specificationName: v.name,
            options: options
        }
    })

    return Promise.resolve(result)
}