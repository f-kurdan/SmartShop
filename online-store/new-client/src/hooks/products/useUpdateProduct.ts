import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import productService from '../../services/product.service'

const useUpdateProduct = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: productService.updateProduct,
        onSuccess: async() => {
            await queryClient.invalidateQueries(['products'])
            await queryClient.invalidateQueries(['specifications'])

        }
    })
  
}

export default useUpdateProduct