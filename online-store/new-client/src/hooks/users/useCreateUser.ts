import { useRouter } from 'next/navigation'
import { useMutation } from 'react-query'
import userService from '../../services/user.service'

const useCreateUser = () => {
  const router = useRouter()
  return useMutation({
    mutationFn: userService.createUser,
    onSuccess: () => {
      router.push('/auth')      
    }
  })
}

export default useCreateUser