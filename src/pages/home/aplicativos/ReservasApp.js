import { Link } from "react-router-dom"
import { IoCalendarOutline } from "react-icons/io5"
import { Col, Card, Row } from 'react-bootstrap'
import { alertToast } from "../../../helpers/alertToast"
import ReservasService from "../../../services/ReservasService"

const ReservasApp = ({user}) => {

    const handleLogin = async () => {
        alertToast("success", "Conectando con Sistema de Reservas")
        try{
            window.location.href = await ReservasService.externalLogin(user)
        }catch(err){
            alertToast("error", err)
        }
    }
    return(
        <Col xs={12} md={6} lg={3}>
            <Card id="reservas" className='g-0 border-gray shadow-sm mb-4'> 
                <Card.Body>
                    <Row>
                        <Col xs={3}>
                            <IoCalendarOutline size={64} />
                        </Col>
                        <Col xs={9} className="pt-3" onClick={handleLogin}>
                            <span className="fs-5">Reserva Salones</span>
                            <Link to="/" className="stretched-link"></Link>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ReservasApp