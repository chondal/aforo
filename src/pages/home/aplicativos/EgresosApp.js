import { Link } from "react-router-dom";
import { IoBusinessOutline, IoRemoveCircleOutline } from "react-icons/io5";
import { Col, Card, Row } from 'react-bootstrap';

const EgresosApp = () => {
    return (
        <Col xs={12} md={6} lg={3}>
            <Card id="egresos" className='g-0 border-gray shadow-sm mb-4'> 
                <Card.Body>
                    <Row>
                        <Col xs={3}>
                            <IoRemoveCircleOutline size={64} />
                        </Col>
                        <Col xs={9} className="pt-3">
                            <span className="fs-5">Egresos</span>
                            <Link to="/egresos" className="stretched-link"></Link>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default EgresosApp;
