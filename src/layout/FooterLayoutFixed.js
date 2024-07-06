import { useContext } from 'react'
import { AuthContext } from '../auth/authContext';
import {Container, Row, Col, Nav} from 'react-bootstrap'
import {IoHomeOutline, IoLogOutOutline, IoChevronBackOutline} from 'react-icons/io5'
import { types } from '../types/types';

const FooterLayoutFixed = ({back}) => {

    const iconSize = 18

    const { dispatch } = useContext(AuthContext);    

    const handleLogOut = async () => {       
        window.localStorage.clear()
        dispatch({ type: types.logout, payload: {} })
        window.location = process.env.REACT_APP_LOGOUT_URL
    }

    return(
        <>
            <footer className='footer border-top border-light shadow bg-white'>
                <Container className='text-center'>
                    <Row>
                        <Col>
                            <Nav.Link href={back}>
                                <IoChevronBackOutline size={iconSize} />
                                <p className='small'>Volver</p>
                            </Nav.Link>
                        </Col>
                        <Col>
                            <Nav.Link href="/">
                                <IoHomeOutline size={iconSize} />
                                <p className='small'>Home</p>
                            </Nav.Link>
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