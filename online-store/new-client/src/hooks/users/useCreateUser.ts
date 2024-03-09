import { useRouter } from 'next/navigation'
import { useMutation, useQueryClient } from 'react-query'
import userService from '../../services/user.service'
import cookie from 'js-cookie';

const useCreateUser = () => {
  const router = useRouter()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: userService.createUser,
    onSuccess: (req) => {
      const accessToken = req.accessToken;
      cookie.set('jwt', accessToken, { expires: 30 }); 
      queryClient.invalidateQueries(['user'])

      router.back()      
    }
  })
}

export default useCreateUser