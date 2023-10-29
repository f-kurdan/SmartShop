import categoryService from "@/services/category.service"
import { useQuery } from "react-query"

const useCategory = (id: string) => {
  return useQuery(["categories", id], () => categoryService.getCategoryById(id), 
  {
    enabled: !!id,
  })
}

export default useCategory