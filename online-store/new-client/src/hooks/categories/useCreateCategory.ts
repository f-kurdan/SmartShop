import { QueryClient, useMutation} from "react-query";
import categoryService from "../../services/category.service";

const queryClient = new QueryClient()

export const useCreateCategory = () => {
    const mutation = useMutation({
        mutationFn: categoryService.createCategory,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['categories'] })
        },
    })
    
    return mutation;
}