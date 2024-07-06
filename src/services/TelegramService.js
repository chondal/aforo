import axios from "axios";
class TelegramService {
    constructor(endpoint){
        this.endpoint = 'https://api.telegram.org:443/bot1487789782:AAHCcPS6SJDv0m8CQpz09h81yZw6t1S_wcA/sendMessage'
    }
    
    async sendMessage(user, data){
        const text0 = `********CONSULTA LEGISAPP********`;
        const text1 = `👤 Usuario: ${user.name} ${user.lastname}\n✉️ Email: ${user.email}\n`;
        const text2 = `📱 Telefono: ${data.phone}\n`;
        const text3 = `✏️ Comentario: ${data.comment}\n`;
  
        const url = this.endpoint
  
        const params = {
          chat_id: '213077083',
          text: `${text0}\n${text1}${text2}${text3}`,
          parse_mode: "HTML",
        };
  
        const result = await axios.post(url, params)

        return result.data
    }
}

export default new TelegramService()