import { useMutation } from 'react-query'
import userService from '../../services/user.service'

const useCreateUser = () => {
  return useMutation({
    mutationFn: userService.createUser,
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: ['users'] })
    }
  })
}

export default useCreateUser