import { useEffect, useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { IoDocumentTextOutline, IoCalendarClearOutline } from "react-icons/io5"
import AppLayout from '../layout/AppLayout'
import TablaRecibos from './recibos/TablaRecibos'
import RecibosService from '../services/RecibosService'
import LoaderComponent from '../components/LoaderComponent'
import { alertToast } from '../helpers/alertToast'
import dayjs from "dayjs";

const Recibos = ({user}) => {

    const expires_in = localStorage.getItem("expires_in");

    if (dayjs().isAfter(dayjs(expires_in)) || !expires_in) {
      window.localStorage.clear()
      window.location = process.env.REACT_APP_LOGOUT_URL
    }
    const currentYear = new Date().getFullYear()

    const [periodo, setPeriodo] = useState(currentYear)

    const [loader, setLoader] = useState(false)

    const [liquidaciones, setLiquidaciones] = useState([])

    const handleSelect = (e) => {
        setPeriodo(e.target.value)
    }
    
    const displayYears = (year) => {
        const y = []
        for(let i=0; i<3; i++) y.push(year-i) 
        return y.map((val, idx)=>{
            return (
                <option key={idx} value={val}>{val}</option>
            )
        })
    }

    useEffect(() => {
        document.title = 'Recibos'
        const getRecibos = async (periodo) => {
            setLoader(true)
            try{
                const rows = await RecibosService.find(user.user, user.cuit, periodo)
                setLiquidaciones(rows.data)
            }catch(err){
                alertToast('Error', err)
            }finally{
                setLoader(false)
            }
        }
        getRecibos(periodo)
    }, [periodo, user.cuit])

    return(
        <>
            <AppLayout back='/'> 
                <Container>
                    <Row className='mb-2'>
                        <Col xs={12}>
                            <h5 className='fw-light border-bottom border-gray pb-2'>
                                <IoDocumentTextOutline /> Recibos
                            </h5>
                        </Col>
                    </Row>
                    <Row className='mb-2'>
                        <Col xs={12}>
                            <Form.Group>
                                <Form.Label className="small fw-light">
                                    <IoCalendarClearOutline /> Período
                                </Form.Label>
                                <Form.Select onChange={handleSelect} value={periodo} aria-label="Default select example">
                                    { displayYears(currentYear) }
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className='mb-4'>
                        <Container xs={12}>
                            {
                                loader
                                ? <LoaderComponent text="Buscando Liquidaciones ..." />
                                : <TablaRecibos liquidaciones={liquidaciones} periodo={periodo} />
                            }
                        </Container>
                    </Row>
                </Container>
            </AppLayout>
        </>
    )
}

export default Recibos