import { useRouter } from 'next/navigation'
import React from 'react'
import { useMutation, useQuery } from 'react-query'
import authService from '../../services/auth.service'

const useLogin = () => {
    const router = useRouter()

    return useMutation({
        mutationFn: authService.login,
        onSuccess: (req) => {
            console.log('useLogin', req.accessToken)
            const accessToken = req.accessToken;
            document.cookie = `accessToken=${accessToken}; HttpOnly;`;
            router.push('/')
        }
    })
}

export default useLogin