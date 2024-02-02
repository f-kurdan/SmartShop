import { useMutation, useQueryClient } from 'react-query'
import productService from '../../services/product.service'


const useCreateProduct = () => {
    const queryClient = useQueryClient()
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