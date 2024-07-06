import { Link } from "react-router-dom"
import { IoBusinessOutline } from "react-icons/io5"
import { Col, Card, Row } from 'react-bootstrap'

const DependenciasApp = () => {

    return(
        <Col xs={12} md={6} lg={3}>
            <Card id="dependencias" className='g-0 border-gray shadow-sm mb-4'> 
                <Card.Body>
                    <Row>
                        <Col xs={3}>
                            <IoBusinessOutline size={64} />
                        </Col>
                        <Col xs={9} className="pt-3">
                            <span className="fs-5">Dependencias</span>
                            <Link to="/dependencias" className="stretched-link"></Link>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default DependenciasApp