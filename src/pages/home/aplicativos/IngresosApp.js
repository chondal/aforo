import { Link } from "react-router-dom";
import { IoAddCircleOutline, IoBusinessOutline } from "react-icons/io5";
import { Col, Card, Row } from 'react-bootstrap';



const IngresosApp = () => {
    return (
        <Col xs={12} md={6} lg={3}>
            <Card id="ingresos" className='g-0 border-gray shadow-sm mb-4 animate__animated animate__fadeInUp'> 
                <Card.Body >
                    <Row >
                        <Col xs={3} >
                            <IoAddCircleOutline size={50} style={{color: 'green'}} />
                        </Col>
                        <Col xs={9} className="pt-3">
                            <span className="fs-5">Ingresos</span>
                            <Link to="/ingresos" className="stretched-link"></Link>
                        </Col>
                       
                    </Row>
                    
                </Card.Body>
            </Card>
        </Col>
    );
}

export default IngresosApp;
