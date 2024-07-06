import React from 'react'
import AppLayout from '../layout/AppLayout'
import { Link } from 'react-router-dom'
import { Accordion, Button, Carousel, Col, Container, Form, FormControl, Row } from 'react-bootstrap'
import { IoArrowBack, IoChatboxOutline, IoInformationCircleOutline } from 'react-icons/io5'
import { alertToast } from '../helpers/alertToast'
// import { getMobileSystem } from '../helpers/getMobileSystem'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { HelpSchema } from './schemas/HelpSchema'
import TelegramService from '../services/TelegramService'

const Help = ({user}) => {

    // const dispositivo = getMobileSystem()
    
    const {register, handleSubmit, formState:{errors}, reset } = useForm({
      resolver:yupResolver(HelpSchema)
    })

    const helpSubmit = async (data) => {
      try{
        TelegramService.sendMessage(user, data)
        alertToast("success", "Enviamos tu consulta, te responderemos lo mas pronto posible");
      }catch(err){
        alertToast("error", err)
      }finally{
        reset()
      }
    }

    const isValid = (value) => {
      return value ? 'is-invalid' : ''
    }
            
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
                          <IoInformationCircleOutline /> Sobre LegisApp
                      </h5>
                  </Col>
              </Row>
              <Row className='mb-4'>
                  <Col xs={12}>
                      <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                          <Accordion.Header>¿Qué es LegisApp?</Accordion.Header>
                          <Accordion.Body>
                            Es una nueva herramienta de
                            acceso fácil, rápido y ágil, a
                            través de la cual se pueden
                            utilizar distintos servicios de la
                            Casa que contribuyen al
                            trabajo diario del personal.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>¿Cómo agregar LegisAPP en tu celular con iOS?</Accordion.Header>
                            <Accordion.Body>
                            <p>
                                Agregar LegisApp en tu celular es muy fácil, solo tenes que seguir los siguientes pasos en tu dispositivo:
                            </p>

                            <div className='text-center'>
                            <Carousel>
                                <Carousel.Item>
                                  <img
                                    className=""
                                    height={500}
                                    src="/tutoriales/ios/1.png"
                                    alt="Paso 1"
                                  />
                                </Carousel.Item>
                                <Carousel.Item>
                                  <img
                                    className=""
                                    height={500}
                                    src="/tutoriales/ios/2.png"
                                    alt="Paso 2"
                                  />
                                </Carousel.Item>
                                <Carousel.Item>
                                  <img
                                    className=""
                                    height={500}
                                    src="/tutoriales/ios/3.png"
                                    alt="Paso 3"
                                  />
                                </Carousel.Item>
                            </Carousel>

                              </div>
                            
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>¿Cómo agregar LegisAPP en tu celular con Android?</Accordion.Header>
                            <Accordion.Body>
                            <p>
                                Agregar LegisApp en tu celular es muy fácil, solo tenes que seguir los siguientes pasos en tu dispositivo:
                            </p>

                            <div className='text-center'>
                            <Carousel>
                                <Carousel.Item>
                                  <img
                                    className=""
                                    height={500}
                                    src="/tutoriales/android/1.jpeg"
                                    alt="Paso 1"
                                  />
                                </Carousel.Item>
                                <Carousel.Item>
                                  <img
                                    className=""
                                    height={500}
                                    src="/tutoriales/android/2.jpeg"
                                    alt="Paso 2"
                                  />
                                </Carousel.Item>
                                <Carousel.Item>
                                  <img
                                    className=""
                                    height={500}
                                    src="/tutoriales/android/3.jpeg"
                                    alt="Paso 3"
                                  />
                                </Carousel.Item>
                            </Carousel>
                            </div>
                            
                            </Accordion.Body>
                        </Accordion.Item>
                        </Accordion>
                    </Col>
               </Row>
                <Row className='mb-2'>
                    <Col xs={12}>
                        <h5 className='fw-light border-bottom border-gray pb-2'>
                            <IoChatboxOutline /> ¿Tenés alguna duda o sugerencia?
                        </h5>
                        <p>
                            Si tienes alguna duda o sugerencia, no dudes en contactarnos.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                      <Form onSubmit={handleSubmit(helpSubmit)} id="enviarContacto">
                            <Form.Group>
                              <Form.Label className="small fw-light">Teléfono de contacto</Form.Label>
                              <FormControl
                                {...register('phone')}
                                type='number'
                                placeholder="Número de Teléfono..."
                                className={isValid(errors.phone)} />
                              <p className="text-danger small">
                                {errors.phone && errors.phone.message}
                              </p>
                            </Form.Group>
                              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                  <Form.Label className='small fw-light'>Comentarios</Form.Label>
                                  <Form.Control 
                                  {...register('comment')}
                                  placeholder="Comentarios..."
                                  as="textarea" 
                                  rows={3}
                                  className={isValid(errors.comment)} />
                                <p className="text-danger small">
                                  {errors.comment && errors.comment.message}
                                </p>
                              </Form.Group>
                              <div className='float-end'>
                                <Button type='submit'>
                                    Enviar
                                </Button>
                              </div>
                      </Form>
                  </Col>
              </Row>
          </Container>
      </AppLayout>
    );
}

export default Help