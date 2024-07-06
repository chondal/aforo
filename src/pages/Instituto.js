import React, { useEffect } from "react"
import { Container, Row, Col, Accordion } from "react-bootstrap"
import { HiOutlineBookOpen } from 'react-icons/hi'
import AppLayout from "../layout/AppLayout"

const Instituto = () => {

    useEffect(()=>{
        document.title =  "ILCP"
    })

    return(
        <>
            <AppLayout back='/'>
                <Container>
                    <Row className='mb-2'>
                        <Col xs={12}>
                            <h5 className='fw-light border-bottom border-gray pb-2'>
                                <HiOutlineBookOpen /> ILCP
                            </h5>
                        </Col>
                    </Row>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Agenda de Cursos</Accordion.Header>
                            <Accordion.Body>
                                contenido
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Mis Cursos</Accordion.Header>
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

export default Instituto