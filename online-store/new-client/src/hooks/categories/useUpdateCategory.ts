import { useMutation, useQueryClient } from 'react-query'
import categoryService from '../../services/category.service'


const useUpdateCategory = () => {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: categoryService.updateCategory,
        onSuccess: () => {
            queryClient.invalidateQueries(['categories'])
        }
    })

  return mutation
}

export default useUpdateCategory