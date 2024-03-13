import cookie from 'js-cookie'
import { jwtDecode } from 'jwt-decode'
import { useRouter } from 'next/navigation'
import React from 'react'
import UserData from '../../components/profile/user-data'
import { Payload } from '../../types'

const user = {
  id: '1',
  username: 'John',
  email: 'johndoe@me.com',
  phone: '123-456-7890',

  orders: [],
}

const index = () => {
  const router = useRouter();
  const token = cookie.get('jwt');

  if (!token) {
    router.replace('/auth');
  }

  const decoded: Payload = jwtDecode(token ?? '');


  return (
    <div className='w-[60%] min-h-[90vh] flex flex-row gap-4 justify-center items-start'>
      <div className='min-w-[15%] flex flex-col gap-4 rounded-md '>
        <span className='bg-white p-3 rounded-lg shadow-lg cursor-pointer'>Настройки</span>
        <span className='bg-white p-3 rounded-lg shadow-lg cursor-pointer'>Заказы</span>
      </div>
      <UserData userId={decoded.userId} />
    </div>
  )
}

export default index