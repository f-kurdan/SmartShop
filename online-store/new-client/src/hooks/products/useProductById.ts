import { useQuery } from 'react-query'
import productService from '../../services/product.service'

const useProduct = (slug:string, color?:string, storageSize?:string) => {
  return useQuery(['products', slug, color, storageSize], () => productService.getProduct(slug, color, storageSize))
}

export default useProduct