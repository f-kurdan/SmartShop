import { variation_options } from '@/data'
import React from 'react'
import { useQuery } from 'react-query'

const getColors = () => {
    return Promise.resolve(variation_options.filter(option => option.variation_id === 1))
}

const useColors = () => {
  return useQuery(['colors'], getColors)
}

export default useColors