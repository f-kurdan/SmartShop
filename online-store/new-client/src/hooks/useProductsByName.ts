import { getProductsByName } from '@/services/product.service'
import { useQuery } from 'react-query'

const useProductsByName = (string: string) => {
  return useQuery(["products", string], () => getProductsByName(string))
}

export default useProductsByName