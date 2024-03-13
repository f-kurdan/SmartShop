import React, { useState } from 'react'

import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'

import { montserrat } from '../../../styles/fonts'
import { SubmitHandler, useForm } from 'react-hook-form'
import useCreateUser from '../../../hooks/users/useCreateUser'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import cookie from 'js-cookie'
import Auth from '../../../components/auth/auth'

type Inputs = {
  username: string,
  email: string,
  phone: string,
  password: string
}

const Signup = () => {
  return (
    <Auth authPage='signup' useHook={useCreateUser} />
  )
}

export default Signup