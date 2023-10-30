import { getProductByCategory } from '@/services/product.service'
import { useQuery } from 'react-query'

const useProductByCategory = (categoryId:string) => {
  return useQuery(["products", categoryId], () => getProductByCategory(categoryId))
}

export default useProductByCategory