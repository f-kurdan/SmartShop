import { useQuery } from 'react-query'
import productService from '../../services/product.service'

const useProductsByName = (name?: string, color?: string, storageSize?: string) => {
  return useQuery(["products", name, color, storageSize], () => productService.getProductsByName(name, color, storageSize))
}

export default useProductsByName