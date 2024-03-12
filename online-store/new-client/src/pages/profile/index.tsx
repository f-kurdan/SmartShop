import cookie from 'js-cookie'
import { jwtDecode } from 'jwt-decode'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Payload } from '../../types'

const user = {
  id: '1',
  username: 'John',
  email: 'johndoe@me.com',
  phone: '123-456-7890',

  orders: [],
}
const labelStyle = `flex flex-col w-96 gap-2`
const inputStyle = `bg-slate-100 rounded-2xl p-4 focus:bg-slate-200 focus:outline-none`

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
      <form className='flex flex-col flex-grow gap-5 justify-center items-center bg-white p-3 rounded-lg shadow-lg'>
        <input type="hidden" value={user.id} />
        <label className={labelStyle}>
          Никнейм
          <input className={inputStyle} type="text" defaultValue={user.username} />
        </label>
        <label className={labelStyle}>
          Email
          <input className={inputStyle} type="email" defaultValue={user.email} />
        </label>
        <label className={labelStyle}>
          Телефон
          <input className={inputStyle} type="tel" defaultValue={user.phone} />
        </label>
        <p>Сменить пароль?</p>
      </form>
    </div>
  )
}

export default index