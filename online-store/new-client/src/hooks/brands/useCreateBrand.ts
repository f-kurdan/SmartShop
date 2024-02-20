import { useMutation, useQueryClient } from "react-query"
import brandService from "../../services/brand.service"


export const useCreateBrand = () => {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: brandService.createBrand,
        onSuccess: async() => {
            await queryClient.invalidateQueries(['brands'])
            await queryClient.invalidateQueries(['specifications'])
        }
    })
    return mutation;
}