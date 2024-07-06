import axios from "axios"

class CredencialService {
    constructor(endpoint){
        this.endpoint =  process.env.REACT_APP_CRED_URI
    }

    async getCredencialFrente(cuil) {

        const headersList = {
            "Accept": "*/*"
        }

        const reqOptions = {
            url: `${this.endpoint}/credencial/frente/${cuil}`,
            method: "GET",
            headers: headersList,
            responseType: 'arraybuffer'
        }
        
        const response = await axios.request(reqOptions);

        const blob = new Blob([response.data], {type: 'image/png'});

        const fileUrl = URL.createObjectURL(blob)

        return fileUrl
    }

    async getCredencialDorso(cuil){
        const headersList = {
            "Accept": "*/*"
        }
        
        const reqOptions = {
            url: `${this.endpoint}/credencial/dorso/${cuil}`,
            method: "GET",
            headers: headersList,
            responseType: 'arraybuffer'
        }
        
        const response = await axios.request(reqOptions);

        const blob = new Blob([response.data], {type: 'image/png'});

        const fileUrl = URL.createObjectURL(blob)

        return fileUrl
    }

    async getCredencialQR(cuil){
        const headersList = {
            "Accept": "*/*"
        }

        const reqOptions = {
            url: `${this.endpoint}/credencial/qr/${cuil}`,
            method: "GET",
            headers: headersList,
            responseType: 'arraybuffer'
        }
        
        const response = await axios.request(reqOptions);

        const blob = new Blob([response.data], {type: 'image/png'});

        const fileUrl = URL.createObjectURL(blob)

        return fileUrl
    }
}

export default new CredencialService()