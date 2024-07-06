import { types } from './../types/types'

class AuthenticationService {

    constructor(token, userDummy){
        this.token = window.localStorage.getItem("access_token")
        this.userDummy = {
            type: types.login,
            payload: {
                name: 'Testing',
                lastname: 'Ldap',
                user: 'TestingLdap',
                email: 'desarrollo@mail.com',
                cuit: '11000000001',
            }
        }
    }
   
    async getUser(token) {
        const result = await fetch(process.env.REACT_APP_USER_INFO_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                'access_token': token
            })
        })

        const user = await result.json()

        return {
            type: types.login,
            payload: {
              name: user.nombre,
              lastname: user.family_name,
              user: user.preferred_username,
              email: user.email,
              cuit: user.cuit,
              token: token
            }
        }
    }

    logOn() {
        if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")
            return this.userDummy

        return process.env.REACT_APP_LOGIN_URL
    }
}

export default new AuthenticationService()