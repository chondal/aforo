import axios from "axios";
import TokenService from "./TokenService";

class RecibosService {
    
    constructor(endpoint){
        this.endpoint =  process.env.REACT_APP_APIS_ENDPOINT
    }

    async find(user, cuit, period) {

        //const token = await this.setToken()
        const token = window.localStorage.getItem("access_token")
        
        const data = {
            username: user,
            cuil: cuit,
            periodo: `${period}`,
            token: token
        };

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }
        

        const result = await fetch(`${this.endpoint}/liquidaciones`, options)


        return await result.json()
    }

    async getFile(liq, filename){
        
        const token = window.localStorage.getItem("access_token")

        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json" 
           }
           
           const data = {
            "liq":`${liq}`,
            "prefix":"SER",
            "filename":filename,
            "token": token
          };

           let bodyContent = JSON.stringify(data);
           
           let reqOptions = {
             url: `${this.endpoint}/liquidaciones/recibo`,
             method: "POST",
             headers: headersList,
             data: bodyContent,
             responseType: 'arraybuffer'
           }
           
           let response = await axios.request(reqOptions);
           
           return response
    }

    async setToken(){
        return await TokenService.getToken()
    }
}

export default new RecibosService()