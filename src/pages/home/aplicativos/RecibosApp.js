import { Link } from "react-router-dom"
import { IoDocumentTextOutline } from "react-icons/io5"
import { Col, Card, Row } from 'react-bootstrap'
import { alertToast } from "../../../helpers/alertToast"

const RecibosApp = ({user}) => {

    return(
        <Col xs={12} md={6} lg={3}>
        <Card id="recibos" className='g-0 border-gray shadow-sm mb-4'> 
            <Card.Body>
                <Row>
                    <Col xs={3}>
                        <IoDocumentTextOutline size={64} />
                    </Col>
                    <Col xs={9} className="pt-3">
                        <span className="fs-5">Recibos de Sueldo</span>
                        {
                            user.cuit 
                            ? <Link to="/recibos" className="stretched-link"></Link>
                            : <Link to="#" onClick={() => alertToast('error', 'Para poder acceder, debe tener cargado un CUIT en el sistema de usuarios')} className="stretched-link"></Link>
                        }
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    </Col>
    )
}

export default RecibosApp