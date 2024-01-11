import { useQuery } from "react-query"
import brandService from "../services/brand.service"

const useBrands = () => { 
    return useQuery(["brands"], brandService.getBrands)
}

export default useBrands