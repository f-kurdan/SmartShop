import { FetchError, User } from "../types"

const usersURL = `${process.env.NEXT_PUBLIC_STOREAPI_URL}/users`

class userService {
    async createUser(formData?: FormData) {
        return await fetch(usersURL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                'username': formData?.get('username'),
                'phone': formData?.get('phone'),
                'email': formData?.get('email'),
                'password': formData?.get('password')})
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new FetchError(res)
            }
        })
    }

    async getUser(id: number | string) {
        const res = await fetch(`${usersURL}/${id}`, {
            credentials: 'include'
        })
        const data: User = await res.json()  
        return data
    }
}

export default new userService()