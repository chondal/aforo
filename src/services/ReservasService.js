class ReservasService {

    constructor(endpoint){
        this.endpoint = process.env.REACT_APP_RESERVAS_URL
    }

    async externalLogin(user){       
        
        const res = await fetch(`${this.endpoint}/api/externalLogin`, {
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(user)
        });

        const content = await res.json()

        if(res.status === 200)
            return `${this.endpoint}/externalLoginConfirm/${content}`

        // eslint-disable-next-line no-throw-literal
        throw "No se puede conectar con el sistema de Reservas"
    }
}

export default new ReservasService()