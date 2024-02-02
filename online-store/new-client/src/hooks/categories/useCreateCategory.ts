import { QueryClient, useMutation, useQueryClient} from "react-query";
import categoryService from "../../services/category.service";


export const useCreateCategory = () => {
    const queryClient = useQueryClient();
    
    const mutation = useMutation({
        mutationFn: categoryService.createCategory,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['categories'] })
        },
    })
    
    return mutation;
}