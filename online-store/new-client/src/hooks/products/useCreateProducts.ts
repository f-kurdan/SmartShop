import { useMutation, useQueryClient } from 'react-query'
import productService from '../../services/product.service'


const useCreateProduct = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: productService.createProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['products'] })
        }
    })
  
}

export default useCreateProduct