import { Link } from "react-router-dom"
import { HiOutlineUserGroup } from 'react-icons/hi'
import { Col, Card, Row } from 'react-bootstrap'

const LaborApp = () => {

    return(
        <Col xs={12} md={6} lg={4}>
            <Card id="labor" className='g-0 border-gray shadow-sm mb-4'> 
                <Card.Body>
                    <Row>
                        <Col xs={3}>
                            <HiOutlineUserGroup size={64} />
                        </Col>
                        <Col xs={9} className="pt-3">
                            <span className="fs-5">Labor Parlamentaria</span>
                            <Link to="/labor" className="stretched-link"></Link>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default LaborApp