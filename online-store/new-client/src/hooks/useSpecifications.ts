import { useQuery } from "react-query";
import { getSpecifications } from "../services/specifications.service";

export const useSpecifications = (categories?: string) => {
    return useQuery(["specifications", categories], () => getSpecifications(categories));
}
