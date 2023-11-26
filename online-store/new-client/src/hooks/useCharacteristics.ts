import { getCharacteristics } from "@/services/characteristics.service";
import { useQuery } from "react-query";

export const useCharacteristics = (categories?: string[]) => {
    return useQuery(["characteristics", categories], () => getCharacteristics(categories));
}
