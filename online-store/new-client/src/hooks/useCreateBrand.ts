import { QueryClient, useMutation } from "react-query"
import brandService from "../services/brand.service"

const queryClient = new QueryClient()

export const useCreateBrand = () => {
    const mutation = useMutation({
        mutationFn: brandService.createBrand,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['brands'] })
        }
    })
    return mutation;
}