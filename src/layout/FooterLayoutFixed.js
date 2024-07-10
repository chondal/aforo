import { useContext } from 'react'
import { AuthContext } from '../auth/authContext';
import {Container, Row, Col, Nav} from 'react-bootstrap'
import {IoHomeOutline, IoLogOutOutline, IoChevronBackOutline} from 'react-icons/io5'
import { types } from '../types/types';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const FooterLayoutFixed = ({back}) => {

    const iconSize = 18

    const { dispatch } = useContext(AuthContext);    

    const handleLogOut = async () => {       
        window.localStorage.clear()
        dispatch({ type: types.logout, payload: {} })
    }

    // navegar para atras boton "volver"
    const navigate = useNavigate();

    return(
        <>
            <footer className='footer border-top border-light shadow bg-white'>
                <Container className='text-center'>
                    <Row>
                        <Col>
                            <Nav.Link href={back}>
                              <div onClick={() => navigate(-1)}>
                                <IoChevronBackOutline size={iconSize} />
                                <p className='small' >Volver</p>
                                </div>
                            </Nav.Link>
                        </Col>
                        <Col>
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                               <IoHomeOutline size={iconSize} />
                               <p className='small'>Home</p>
                           </Link>
                        </Col>
                        <Col>
                            <Nav.Link href="#" onClick={handleLogOut}>
                                <IoLogOutOutline size={iconSize} />
                                <p className='small'>Salir</p>
                            </Nav.Link>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default FooterLayoutFixed