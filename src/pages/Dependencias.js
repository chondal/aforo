import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Container, Row, Col, Form, FormControl, InputGroup, Button, Card, Pagination } from 'react-bootstrap'
import { 
    IoBusinessOutline, 
    IoLocationOutline, 
    IoPersonSharp, 
    IoPhonePortraitOutline, 
    IoTrashBinOutline, 
    IoSearchOutline 
} from "react-icons/io5"
import queryString from 'query-string';
import AppLayout from '../layout/AppLayout'
import DependenciasService from '../services/DependenciasService'
import LoaderComponent from './../components/LoaderComponent'

const Dependencias = ({user}) => {

    const navigate = useNavigate();

    const location = useLocation();

    const [dependencias, setDependencias] = useState([])
    
    const [currentPage, setCurrentPage] = useState(0)

    const [withoutDependencias, setWithoutDependencias] = useState(false)

    const [loader, setLoader] = useState(false)
   
    const { q } =  queryString.parse(location.search)

    const [searchText, setSearchText] = useState(q || '')

    const handleInputChange = (e) => {
        setSearchText(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`);
    }

    const handleReset = () => {
        setCurrentPage(0)
        navigate(``)
        setSearchText('')
    }

    const getDependencias = async () => {
        setWithoutDependencias(false)
        setLoader(true)
        try{
            const rows = await DependenciasService.findAll(currentPage)
            setDependencias(rows)
        }catch(err){
            setWithoutDependencias(true)
        }finally{
            setLoader(false)
        }
    }

    const searchDependencias = async (q) => {
        setWithoutDependencias(false)
        setLoader(true)
        try{
            const rows = await DependenciasService.find(q, currentPage)
            setDependencias(rows)
        }catch(err){
            setWithoutDependencias(true)
        }finally{
            setLoader(false)
        }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        !q ? getDependencias() : searchDependencias(q)
        document.title = 'Dependencias';
    }, [q, currentPage]);
  
    
    const getPages = (number) => {
        let items = []
        for(let i=1; i <= number; i++){
            if (i === 1 || i === number || (i < currentPage + 4 && i > currentPage -4)) {
                items.push(
                    <Pagination.Item onClick={() => setCurrentPage(i)} key={i} active={i === currentPage}>
                      {i}
                    </Pagination.Item>,
                  );                
            }else if (i === currentPage + 5 || i === currentPage - 5) {
                items.push(
                    <Pagination.Item key={i}>
                      ...
                    </Pagination.Item>,
                  );                
            }
        }    
        return items;    
    }

    return(
        <>
            <AppLayout back='/'>
                <Container>
                    <Row className='mb-2'>
                        <Col xs={12}>
                            <h5 className='fw-light border-bottom border-gray pb-2'>
                                <IoBusinessOutline /> Dependencias
                            </h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <Form onSubmit={handleSearch} id="buscarDependencias">
                                <Form.Group>
                                    <Form.Label className="small fw-light"><IoSearchOutline /> Buscar</Form.Label>
                                    <InputGroup className="mb-3">
                                        <FormControl
                                        name='searchText'
                                        placeholder="Dependencia..."
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                        onChange={handleInputChange}
                                        value={searchText}/>
                                        <Button type='submit' variant="outline-secondary" id="button-addon2">
                                            Buscar
                                        </Button>
                                        <Button onClick={handleReset} type='reset' variant="outline-secondary" id="button-addon2">
                                        <IoTrashBinOutline />
                                        </Button>
                                    </InputGroup>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                    <Row className='mb-4'>
                        <Col xs={12}>
                            { loader
                                ? <LoaderComponent text="Buscando Dependencias..." /> 
                                : ''
                            }
                            {
                                dependencias.data?.length ? dependencias.data?.map((e, index) => {
                                    return(
                                        <Card key={index} className='border-light shadow-sm mb-3'>
                                            <Card.Body>
                                                <address>
                                                    <strong>{e.nombre}</strong> <br />
                                                    <IoPhonePortraitOutline /> <span className='fw-light'>{e.directo} internos {e.internos}</span> <br />
                                                    <IoPersonSharp /> <span className='fw-light'>{e.responsable}</span> <br />
                                                    <IoLocationOutline /> {e.edificio} - {e.piso} Piso - Oficina: {e.oficina}
                                                </address>
                                            </Card.Body>
                                        </Card>
                                    )
                                })
                                :
                                ''
                            }
                            {
                                withoutDependencias ?                                 
                                <p className='lead'>
                                    <span className='fw-bolder'>Atención!</span><br /> 
                                    No se encontraron dependencias
                                </p>
                                :
                                ''
                            }
                        </Col>
                    </Row>
                    <Pagination className='justify-content-center'>
                        {getPages(dependencias.pages)}
                    </Pagination>
                </Container>
            </AppLayout>
        </>
    )
}

export default Dependencias