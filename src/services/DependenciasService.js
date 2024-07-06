import axios from "axios";
import TokenService from "./TokenService";

class DependenciasService {
    
    constructor(endpoint){
        this.endpoint =  process.env.REACT_APP_APIS_ENDPOINT
    }

    async find(value, page){

        // const token = await this.setToken()

        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const result = await axios(`${this.endpoint}/dependencias/${value}/${page}`, options)

        return await result.data
    }

    async findAll(page) {

        //const token = await this.setToken()
        
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const result = await axios(`${this.endpoint}/dependencias/${page}`, options)

        return await result.data
    }

    async setToken(){
        return await TokenService.getToken()
    }

}

export default new DependenciasService()