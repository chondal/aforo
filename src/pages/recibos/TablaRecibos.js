import { useState } from "react"
import { Row, Col, Table, Card } from "react-bootstrap"
import { IoDownloadOutline } from "react-icons/io5"
import LoaderComponent from "../../components/LoaderComponent"
import { alertToast } from "../../helpers/alertToast"
import RecibosService from "../../services/RecibosService"

const TablaRecibos = ({liquidaciones, periodo}) => {

    const meses = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
      ];
    
    const [loader, setLoader] = useState(false)

    const handleDownload = async (e) => {
        setLoader(true)

        try{
            const filename = e.currentTarget.getAttribute('data')
            const result = await RecibosService.getFile(periodo, filename)
            const file = new Blob([result.data], {type:'application/pdf'})
            const fileUrl = URL.createObjectURL(file)
            window.open(fileUrl, "_self")
        }catch(err){
            alertToast('error', err)
        }finally{
            setLoader(false)
        }
    }

    return(
        <>
            <Row>
                <Col xs={12}>
                    <Card className="border-light shadow-sm">
                        <Card.Header>
                            <span className="fw-light">Liquidaciones</span>
                        </Card.Header>
                        <Card.Body>
                            <Table responsive>
                                <tbody>
                                    {
                                        liquidaciones.length ? liquidaciones.reverse().map( (e, index) => {
                                            return(
                                                <tr key={index}>
                                                    <td className="fw-light">{meses[parseInt(e.periodo.slice(4,6))-1]}</td>
                                                    <td align="right">
                                                        {
                                                            loader
                                                            ? <LoaderComponent />
                                                            : <IoDownloadOutline className="descargaRecibo" size={24} onClick={handleDownload} data={e.archivo} />
                                                        }
                                                    </td>
                                                </tr>
                                            )
                                        })
                                        :
                                        <tr className="text-center">
                                            <td colSpan={3}>No se encontraron recibos para este período</td>
                                        </tr>
                                    }
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default TablaRecibos