import { Link } from "react-router-dom";
import { IoAccessibility, IoDocumentTextOutline } from "react-icons/io5";
import { Col, Card, Row, ProgressBar } from 'react-bootstrap';
import { alertToast } from "../../../helpers/alertToast";

const AforoCounter = ({ user }) => {
    const aforoActual = 50; // Este es un valor de ejemplo
    const aforoMaximo = 100; // Este es un valor de ejemplo
    const porcentajeAforo = (aforoActual / aforoMaximo) * 100;

    return (
        <Col xs={12} md={6} lg={3}>
            <Card id="aforoCounter" className='g-0 border-gray shadow-sm mb-4'> 
                <Card.Body>
                    <Row>
                        <Col xs={3}>
                            <IoAccessibility size={64} />
                        </Col>
                        <Col xs={9} className="pt-3">
                            <span className="fs-5">Aforo {aforoActual} / {aforoMaximo}</span>
                            <ProgressBar now={porcentajeAforo} label={`${porcentajeAforo}%`} className="mt-3" />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default AforoCounter;
