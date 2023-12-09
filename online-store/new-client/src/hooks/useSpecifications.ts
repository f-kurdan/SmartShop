import { getSpecifications } from "@/services/characteristics.service";
import { useQuery } from "react-query";

export const useSpecifications = (categories?: string[]) => {
    return useQuery(["characteristics", categories], () => getSpecifications(categories));
}
