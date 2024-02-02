import { useMutation, useQueryClient } from 'react-query'
import brandService from '../../services/brand.service'

const useUpdateBrand = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: brandService.updateBrand,
        onSuccess: async () => {
            await queryClient.invalidateQueries(['brands'])
        }
    })
}

export default useUpdateBrand