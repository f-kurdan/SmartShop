import { variation_options, variations } from "@/data"
import { useQuery } from "react-query";

const getCharacteristics = (categoryId?: string) => {
    // console.log('это здесь '+ categoryId)
    const categoryVariations = categoryId ? variations.filter(v => v.category_id.toString() === categoryId) : variations;
    
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

export const useCharacteristics = (categoryId?: string) => {
    return useQuery(["characteristics", categoryId], () => getCharacteristics(categoryId));
}
