import React from 'react'
import { useQuery } from 'react-query'
import userService from '../../services/user.service'

const useGetUser = (id: number | string) => {
  return useQuery(['user', id], () => userService.getUser(id))
}

export default useGetUser