import React from 'react'
import { QueryClient, useMutation } from 'react-query'
import categoryService from '../../services/category.service'

const queryClient = new QueryClient()

const useDeleteCategory = () => {
  return useMutation({
    mutationFn: categoryService.deleteCategory,
    onSuccess: () => {
        queryClient.invalidateQueries(['categories']);
    }
  })
}

export default useDeleteCategory