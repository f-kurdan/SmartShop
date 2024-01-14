import { QueryClient, useMutation } from 'react-query'
import productService from '../../services/product.service'

const queryClient = new QueryClient()

const useCreateProduct = () => {
    return useMutation({
        mutationFn: productService.createProduct,
        onSuccess: () => {
            queryClient.invalidateQueries(['products'])
        }
    })
  
}

export default useCreateProduct