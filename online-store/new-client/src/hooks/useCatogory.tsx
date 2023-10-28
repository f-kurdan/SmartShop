import categoryService from "@/services/category.service"
import { useQuery } from "react-query"

const useCategory = (slug: string) => {
  return useQuery(["categories", slug], () => categoryService.getCategoryById(slug), 
  {
    enabled: !!slug,
  })
}

export default useCategory