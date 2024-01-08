import { useQuery } from "react-query"
import brandService from "../services/brand.service"

export const useBrands = () => { 
    return useQuery(["brands"], brandService.getBrands)
}