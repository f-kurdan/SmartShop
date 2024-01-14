import { useMutation } from 'react-query'
import productService from '../../services/product.service'

const useCreateProduct = () => {
    return useMutation({
        mutationFn: productService.createProduct,
        onSuccess: (data) => {
            
        }
    })
  
}

export default useCreateProduct