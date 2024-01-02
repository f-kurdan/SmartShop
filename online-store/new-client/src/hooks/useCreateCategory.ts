import { useMutation } from "react-query";
import categoryService from "../services/category.service";

export function useCreateCategory() {
    const mutation = useMutation( {mutationFn: (formData?: FormData) => categoryService.createCategory(formData),  }  )
    return mutation;
}