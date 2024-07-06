import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { IoDocumentTextOutline, IoArrowBack } from "react-icons/io5"
import AppLayout from '../layout/AppLayout'
import { Link } from 'react-router-dom'

const Visitas = () => {

    useEffect(() => {
        const script = document.createElement('script');

        script.src = 'https://legis-visit-widget.herokuapp.com/widget/index.js';
        script.async = true;

        document.body.appendChild(script);
    }, [])

  return (
    <AppLayout> 
        <Container>
            <Row className='mt-4 mb-2'>
                <Col className='mb-4'>
                    <Link to='/' className='link-dark text-decoration-none'> <IoArrowBack /> Home</Link>
                </Col>
            </Row>
            <Row className='mb-2'>
                <Col xs={12}>
                    <h5 className='fw-light border-bottom border-gray pb-2'>
                        <IoDocumentTextOutline /> Reservar Visitas Guiadas
                    </h5>
                </Col>
            </Row>

            <Row>
                <Col xs={12} md={8}>
                    <div class="m-activity-detail m-activity-detail--covid">
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <td>
                                                Medidas Covid-19
                                            </td>
                                            <td>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae eius a placeat amet necessitatibus temporibus voluptatum nobis porro rerum cupiditate suscipit, corrupti obcaecati quae aperiam nihil ut unde autem! Animi!
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Duración
                                            </td>
                                            <td>
                                                2 Horas.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Idioma
                                            </td>
                                            <td>
                                                La actividad se realiza con un guía que habla español.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                ¿Cuándo reservar?
                                            </td>
                                            <td>
                                                Se permiten reservas hasta 24 horas antes siempre que queden plazas. Reserva ya y asegura tu plaza. 
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Accesibilidad
                                            </td>
                                            <td>
                                                Es accesible en silla de ruedas.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Mascotas
                                            </td>
                                            <td>
                                                No permitidas.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Costo
                                            </td>
                                            <td>
                                                La actividad es <b>GRATUITA</b>.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Instituciones educativas y culturales.
                                            </td>
                                            <td>
                                                Para poder hacer una reserva para una organizacion, las mismas deberan completar un formulario de alta, por favor contactenos por correo a <a href="mailto:visitasguiadas@legislatura.gov.ar">visitasguiadas@legislatura.gov.ar</a>.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Preguntas frecuentes
                                            </td>
                                            <td>
                                                <b>Pregunta</b> - ¿Cómo hacer la reserva?<br />
                                                <b>Respuesta</b> - Para reservar esta actividad solo tenés que elegir la fecha deseada y completar el formulario de esta misma página. La confirmación es inmediata. <br />
                                                <b>Pregunta</b> - ¿Se necesita un número mínimo de participantes?<br />
                                                <b>Respuesta</b> - Esta actividad necesita un mínimo de 2 participantes. En caso de no alcanzar ese número, nos contactaremos con ustedes para ofrecerles diferentes alternativas. <br />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                    </div>

                </Col>
                <Col xs={12} md={4}>
                    <div
                        data-type="none"
                        data-btntext="Reservar"
                        data-direction="column"
                        data-apikey="djk*PMR6jnv0zma-nfe"
                        class="widget-legis-visit"
                    ></div>
                </Col>
            </Row>
        </Container>
    </AppLayout>
    )
}

export default Visitas
