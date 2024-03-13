import { montserrat } from '@/styles/fonts'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Auth from '../../components/auth/auth'
import useLogin from '../../hooks/auth/useLogin'
import { FetchError } from '../../types'

type Inputs = {
  email: string,
  password: string
}

const Login = () => {
  return (
    <Auth authPage='login' useHook={useLogin} />
  )
}

export default Login