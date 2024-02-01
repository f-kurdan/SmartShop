import { QueryClient, useMutation } from 'react-query'
import categoryService from '../../services/category.service'

const queryClient = new QueryClient()

const useUpdateCategory = () => {
    const mutation = useMutation({
        mutationFn: categoryService.updateCategory,
        onSuccess: () => {
            queryClient.invalidateQueries(['categories'])
        }
    })

  return mutation
}

export default useUpdateCategory