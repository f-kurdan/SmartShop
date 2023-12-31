import { getProduct } from '@/services/product.service'
import { useQuery } from 'react-query'

const useProduct = (slug:string, color?:string, storageSize?:string) => {
  return useQuery(['products', slug, color, storageSize], () => getProduct(slug, color, storageSize))
}

export default useProduct