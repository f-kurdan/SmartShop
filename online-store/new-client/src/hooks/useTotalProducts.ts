import { getTotalProducts } from "@/services/product.service"
import { useQuery } from "react-query"

const useTotalProducts = () => {
    return useQuery(["products"], getTotalProducts)
}

export default useTotalProducts