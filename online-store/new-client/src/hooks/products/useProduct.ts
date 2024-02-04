import { useQuery } from 'react-query'
import productService from '../../services/product.service'

const useProduct = (slug:string) => {
  return useQuery(['products', slug], () => productService.getProduct(slug))
}

export default useProduct