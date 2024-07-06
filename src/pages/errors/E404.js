import React from 'react'
import { Col, Container } from 'react-bootstrap'
import { IoArrowBack } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import AppLayout from '../../layout/AppLayout'

const E404 = () => {
  return (
        <>
            <AppLayout>
                <Container>
                    <Col xs={12} className='text-center mt-5 mb-5'>
                        <h1 className="text-secondary fw-bold display-1">404</h1>
                        <h2 className='fs-3'>No se encontró la página</h2>
                        <p className='lead mb-5'>La página que estas buscando no se encuentra disponible</p>
                        <Link to="/" className="btn btn-outline-secondary link-dark text-decoration-none fw-light">
                            <IoArrowBack /> <span className="fw-light">Volver a Inicio</span>
                        </Link>
                    </Col>
                </Container>
            </AppLayout>
        </>
  )
}

export default E404