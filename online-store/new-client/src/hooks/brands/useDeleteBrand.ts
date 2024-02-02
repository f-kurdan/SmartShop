import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import brandService from '../../services/brand.service'

const useDeleteBrand = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: brandService.deleteCategory,
        onSuccess: async () => {
            await queryClient.invalidateQueries(['brands'])
    }
    })
}

export default useDeleteBrand