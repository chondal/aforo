import React, { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { IoIdCardOutline, IoQrCodeOutline, IoAlertCircleOutline } from "react-icons/io5"
import { alertToast } from "../helpers/alertToast"
import AppLayout from "../layout/AppLayout"
import CredencialService from "../services/CredencialService"
import LoaderComponent from "../components/LoaderComponent"

const Credencial = ({user}) => {

    const [front, setFront] = useState("")
    const [back, setBack] = useState("")
    const [errorResponse, setErrorResponse] = useState(true)
    
    const [loader, setLoader] = useState(false)
    
    const getCredencialFront = async() => {
        setLoader(true)
        try {
            const response = await CredencialService.getCredencialFrente(user.cuit)
            setFront(response)
        } catch (error) {
            alertToast('Error', error)
            setErrorResponse(false)
        } finally {
            setLoader(false)
        }
    }

    const getCredencialBack = async() => {
        setLoader(true)
        try{
            const response = await CredencialService.getCredencialDorso(user.cuit)
            setBack(response)
        }catch(error){
            alertToast('Error', error)
            setErrorResponse(false)
        }finally{
            setLoader(false)
        }
    }

    const flipCredencial = (e) => {
        document.getElementById("credencial").classList.toggle('rotate');
    }
        
    useEffect(()=>{
        !front ? getCredencialFront() : <></>
        !back ? getCredencialBack() : <></>

        document.title =  "Mi Credencial"
    },[])

    return(
        <>
            <AppLayout back='/'>
                <Container>
                    <Row className='mb-2'>
                        <Col xs={12}>
                            <h5 className='fw-light border-bottom border-gray pb-2'>
                                <IoIdCardOutline /> Mi Credencial
                            </h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            { 
                                loader 
                                    ? <LoaderComponent text="Buscando Credencial" /> 
                                    : 
                                    <>
                                        {
                                            !front || !back
                                            ?
                                            <>
                                                <Col hidden={errorResponse} className="text-center">
                                                    <IoAlertCircleOutline size={128} className="text-muted m-5"  />
                                                    <p className="text-muted text-center">
                                                        No se encuentra credencial vigente. <br />
                                                        <br />
                                                        Por favor, comunicarse con la Oficina de Atención a los Equipos Legislativos (OFALEGIS). <br />
                                                        Internos 3010 / 3011 de 10 a 17 hs. De lunes a viernes.<br />
                                                        <br />
                                                        <strong>Muchas gracias!</strong>
                                                    </p>
                                                </Col>
                                            </>
                                            :
                                            <>
                                                <Col xs={12}>
                                                    <div id="container-credencial" className="container-credencial" onClick={flipCredencial}>
                                                        <div className="credencial" id="credencial">
                                                            <div id="credencial-front" className="credencial-front">
                                                                <img src={front} alt="" className="img-fluid" />
                                                            </div>
                                                            <div id="credencial-back" className="credencial-back">
                                                                <img src={back} alt="" className="img-fluid" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </>
                                        }
                                        <Row>
                                            <Col xs={12} className='text-center'>
                                                <a href="/qr" className='btn btn-primary btn-legis btn-lg'>
                                                   <IoQrCodeOutline /> Generar QR
                                                </a>
                                            </Col>
                                        </Row>
                                    </>
                            }
                        </Col>
                    </Row>
                </Container>
            </AppLayout>
        </>
    )
}

export default Credencial