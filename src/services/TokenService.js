import axios from "axios"
import CryptoJS from "crypto-js";
class TokenService {

    constructor(endpoint, token){
        this.token = window.localStorage.getItem("access_token")
        this.endpoint = process.env.REACT_APP_APIS_ENDPOINT
    }

    async getToken(){
        
        const userDecrypt = CryptoJS.AES.decrypt(
            window.localStorage.getItem("IxSTUOSGGHxIGGUOSTSHpRkapsVuWEjFPtMogVWXLpTUKIznQNnGYy"),
            process.env.REACT_APP_CRYPT_KEY
        )
    
        const user = JSON.parse(userDecrypt.toString(CryptoJS.enc.Utf8))

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                "username": user.user,
                "cuit": user.cuit,
                "token": user.token
            }
        }

        const result = await axios(`${this.endpoint}/autenticacion/token`, options)

        return result.data
    }
}

export default new TokenService()