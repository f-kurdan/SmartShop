import { useMutation, useQueryClient } from 'react-query'
import productService from '../../services/product.service'

const useDeleteProduct = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: productService.deleteProduct,
        onSuccess: async () => {
            await queryClient.invalidateQueries(["products"])
        }
    })
}

export default useDeleteProduct