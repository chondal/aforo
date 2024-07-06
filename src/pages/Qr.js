import React, {useState, useEffect} from "react"
import { alertToast } from "../helpers/alertToast"
import CredencialService from "../services/CredencialService"
import MinLayout from "../layout/MinLayout"
import { Image, Container, Row, Col, Alert } from "react-bootstrap"
import { IoAlertCircleOutline, IoQrCodeOutline } from "react-icons/io5"
import LoaderComponent from "../components/LoaderComponent"

const Qr = ({user}) => {

  const [qr, setQr] = useState("")

  const [loader, setLoader] = useState(false)

  const [errorResponse, setErrorResponse] = useState(true)

  const getQr = async() => {
    setLoader(true)
      try{
          const response = await CredencialService.getCredencialQR(user.cuit)
          setQr(response)
      }catch(error){
          alertToast('Error', error)
          setErrorResponse(false)
      }finally{
        setLoader(false)
      }
  }

  function refreshPage() {
    window.location.reload(false);
  }

  useEffect(()=>{
    !qr ? getQr() : <></>

    document.title = "QR"
  }, [qr])

  return (
    <>
      <MinLayout back="/credencial">
        <Container>
          {
            loader
            ? <LoaderComponent />
            : 
            <>

              <Row className="justify-content-center text-center mb-5">
                <Col xs={7} md={6}>
                  {
                    qr
                    ? 
                      <>
                        <div className="d-inline-block p-1 mt-2 bg-white">
                          <Image src={qr} width={150} />
                        </div>
                      </>
                    : 
                    <>
                      <Col hidden={errorResponse}>
                        <IoAlertCircleOutline size={128} className="text-muted m-5"  />
                        <p className="text-muted">
                          No se encuentra credencial vigente. <br />
                          <br />
                          Por favor, comunicarse con la Oficina de Atención a los Equipos Legislativos (OFALEGIS). <br />
                          Internos 3010 / 3011 de 10 a 17 hs. De lunes a viernes.<br />
                          <br />
                          <strong>Muchas gracias!</strong>
                        </p>
                      </Col>
                    </>
                  }
                </Col>
              </Row>
              {
                qr
                ? 
                <>
                  <Row className="justify-content-center text-center mt-4">
                    <Col xs={8} md={6}>
                        <Alert variant="info">
                          Por favor, apoye el código QR en el Acceso.
                        </Alert>
                    </Col>
                  </Row>
                  <Row className="justify-content-center text-center mt-4">
                    <Col xs={8} md={6}>
                      <button className="btn btn-primary btn-legis btn-lg" onClick={refreshPage}>
                        <IoQrCodeOutline /> Generar Nuevo QR
                      </button>
                    </Col>
                  </Row>
                </>
                :
                <></>
              }
            </>
          }
          <Row className="justify-content-center text-center">
            <Col xs={6} md={3}>
              <Image src="isologotipo.svg" fluid />
            </Col>
          </Row>
        </Container>
      </MinLayout>
    </>
  )
}

export default Qr