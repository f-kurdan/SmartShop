import { useRouter } from 'next/navigation'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import authService from '../../services/auth.service'
import cookie from 'js-cookie';

const useLogin = () => {
    const router = useRouter()
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: authService.login,
        onSuccess: (req) => {
            const accessToken = req.accessToken;
            cookie.set('jwt', accessToken, { expires: 30 });
            queryClient.invalidateQueries(['user'])
            router.back()
        }
    })
}

export default useLogin