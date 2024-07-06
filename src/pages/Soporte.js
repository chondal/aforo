import React from 'react';
import LoginLayout from "../layout/LoginLayout"
import { Container, Row, Col, Card } from 'react-bootstrap'
import { IoArrowBack, IoPhonePortraitOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

export const Soporte = () => {
  return (
    <>
        <LoginLayout>
            <Container className='animate__animated animate__fadeIn'>
                <p className='text-center p-5'>
                    <img src='/iso_sistemas.png' alt="Dirección General de Sistemas Informáticos" /> <br />
                    <strong>Soporte</strong><br /> 
                    Dirección General de Sistemas Informáticos
                </p>
                <Row className='mb-4 justify-content-center'>
                    <Col xs={12} sm={6}>
                        <Card className='border-gray shadow-sm mb-3'>
                            <Card.Body className='text-center'>
                                <address>
                                    <IoPhonePortraitOutline /> <span className='fw-light'>Llamar al</span> <br />
                                    <strong>(011) 4338-3000 interno 1000</strong> <br />
                                </address>

                            </Card.Body>
                        </Card>
                    </Col>
                    {/* <Col xs={12} sm={6}>
                        <Card className='border-gray shadow-sm mb-3'>
                            <Card.Body className='text-center'>
                                <address>
                                    <IoTvOutline /> <span className='fw-light'>Cargar solicitud vía intranet</span> <br />
                                    <strong>http://solicitudesdgsi.legislatura.gov.ar</strong> <br />
                                </address>
                            </Card.Body>
                        </Card>
                    </Col> */}
                    <Col xs={12} className='text-center mt-5 mb-5'>
                        <Link to="/" className="link-dark text-decoration-none fw-light"><IoArrowBack /> <span className="fw-light">Volver</span></Link>
                    </Col>
                </Row>
            </Container>
        </LoginLayout>
    </>
    )
}
