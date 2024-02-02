import { useMutation, useQueryClient } from 'react-query'
import categoryService from '../../services/category.service'

const useDeleteCategory = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: categoryService.deleteCategory,
    onSuccess: () => {
        queryClient.invalidateQueries(['categories']);
    }
  })
}

export default useDeleteCategory