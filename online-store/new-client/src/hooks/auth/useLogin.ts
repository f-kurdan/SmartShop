import { useRouter } from 'next/navigation'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import authService from '../../services/auth.service'

const useLogin = () => {
    const router = useRouter()
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: authService.login,
        onSuccess: (req) => {
            const accessToken = req.accessToken;
            queryClient.invalidateQueries(['user'])
            document.cookie = `accessToken=${accessToken}; HttpOnly;`;
            router.push('/')
        }
    })
}

export default useLogin