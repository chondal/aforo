import React, { useEffect } from "react"
import { Accordion, Container, Row, Col } from "react-bootstrap"
import { HiOutlineUserGroup } from "react-icons/hi"
import AppLayout from "../layout/AppLayout"

const Labor = () => {

    useEffect(()=>{
        document.title =  "Labor Parlamentaria"
    })

    return(
        <>
            <AppLayout back='/'>
                <Container>
                    <Row className='mb-2'>
                        <Col xs={12}>
                            <h5 className='fw-light border-bottom border-gray pb-2'>
                                <HiOutlineUserGroup /> Labor Parlamentaria
                            </h5>
                        </Col>
                    </Row>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Buscador</Accordion.Header>
                            <Accordion.Body>
                                contenido
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Composición</Accordion.Header>
                            <Accordion.Body>
                                contenido
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Documentos</Accordion.Header>
                            <Accordion.Body>
                                contenido
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Audiencias</Accordion.Header>
                            <Accordion.Body>
                                contenido
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Container>
            </AppLayout>
        </>
    )
}

export default Labor