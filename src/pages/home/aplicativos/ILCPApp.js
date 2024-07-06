import { Link } from "react-router-dom"
import { IoBookOutline } from 'react-icons/io5'
import { Col, Card, Row } from 'react-bootstrap'

const ILCPApp = () => {

    return(
        <Col xs={12} md={6} lg={4}>
            <Card id="labor" className='g-0 border-gray shadow-sm mb-4'> 
                <Card.Body>
                    <Row>
                        <Col xs={3}>
                            <IoBookOutline size={64} />
                        </Col>
                        <Col xs={9} className="pt-3">
                            <span className="fs-5">ILCP</span>
                            <Link to="/ilcp" className="stretched-link"></Link>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ILCPApp