import { variation_options, variations } from "@/data"
import { useQuery } from "react-query";

const getCharacteristics = async (categoryId: string) => {
    let categoryVariations = variations.filter(v => v.category_id.toString() === categoryId)
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

export const useCharacteristics = (categoryId: string) => {
    return useQuery(["characteristics", categoryId], () => getCharacteristics(categoryId), { enabled: !!categoryId });

}
