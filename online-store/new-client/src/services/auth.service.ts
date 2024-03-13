import { AuthInputs } from "../components/auth/auth"
import { FetchError } from "../types"

const authURL = `${process.env.NEXT_PUBLIC_STOREAPI_URL}/auth`

class authService {
    async login(data?: AuthInputs) {
        return await fetch(`${authURL}/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new FetchError(res)
            }
        })
    }
}

export default new authService()