import { getBrands } from "@/services/brand.service"
import { useQuery } from "react-query"

export const useBrands = () => { 
    return useQuery(["brands"], getBrands)
}