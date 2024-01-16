import { QueryClient, useMutation } from 'react-query'
import productService from '../../services/product.service'

const queryClient = new QueryClient()

const useCreateProduct = () => {
    return useMutation({
        mutationFn: productService.createProduct,
        onSuccess: () => {
            queryClient.invalidateQueries(['products'])
        },
        onError: (err) => {
            throw new Error("Произошла ошибка");
        }
    })
  
}

export default useCreateProduct