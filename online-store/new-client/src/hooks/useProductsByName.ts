import { getProductsByName } from '@/services/product.service'
import { useQuery } from 'react-query'

const useProductsByName = (name?: string, color?: string, storageSize?: string) => {
  return useQuery(["products", name, color, storageSize], () => getProductsByName(name, color, storageSize))
}

export default useProductsByName