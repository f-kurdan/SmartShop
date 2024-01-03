import { QueryClient, useMutation} from "react-query";
import categoryService from "../services/category.service";

const queryClient = new QueryClient()

export function useCreateCategory() {
    const mutation = useMutation({
        mutationFn: categoryService.createCategory,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['categories'] })
        },
        onError: (err) => {
            throw new Error("Произошла ошибка");
        }
    })
    return mutation;
}