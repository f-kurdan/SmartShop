import { variations, variation_options } from "@/data";

export const getCharacteristics = (categories?: string[], selectedCharacteristics?: string[]) => {
    const categoryVariations = categories ? variations.filter(v => categories.some(cat => cat === v.category_id.toString())) : variations;
    
    const result = categoryVariations.map(v => {
        const options = variation_options.filter(o => o.variation_id === v.id);
        return {
            id: v.id,
            charactehcisticName: v.name,
            options: options
        }
    })

    return Promise.resolve(result)
}