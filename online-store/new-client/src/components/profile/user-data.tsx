import React from 'react'
import useGetUser from '../../hooks/users/useGetUser'
import { montserrat } from '../../styles/fonts'

const labelStyle = `flex flex-col w-96 gap-2`
const inputStyle = `bg-slate-100 rounded-2xl p-4 focus:bg-slate-200 focus:outline-none`

const UserData = ({userId}: {userId: string}) => {
    const { data: user } = useGetUser(userId)

    return (
        <form className={`${montserrat.className} flex flex-col flex-grow gap-5 justify-center items-center bg-white p-3 rounded-xl shadow-lg`}>
            <input type="hidden" value={user?.id} />
            <label className={labelStyle}>
                Никнейм
                <input className={inputStyle} type="text" defaultValue={user?.username} />
            </label>
            <label className={labelStyle}>
                Email
                <input className={inputStyle} type="email" defaultValue={user?.email} />
            </label>
            <label className={labelStyle}>
                Телефон
                <input className={inputStyle} type="tel" defaultValue={user?.phone} />
            </label>
            <p>Сменить пароль?</p>
        </form>
    )
}

export default UserData