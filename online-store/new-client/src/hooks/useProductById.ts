import { getProduct } from '@/services/product.service'
import { useQuery } from 'react-query'

const useProduct = (model:string, color?:string, storageSize?:string) => {
  return useQuery(['products', model, color, storageSize], () => getProduct(model, color, storageSize))
}

export default useProduct