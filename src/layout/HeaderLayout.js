import { useContext } from 'react';
import { Container, Navbar, Nav, Offcanvas} from 'react-bootstrap'
import { IoPersonCircleOutline, IoHelpBuoyOutline, IoLogOutOutline, IoInformationCircleOutline } from  "react-icons/io5"
import { AuthContext } from '../auth/authContext';
import { types } from '../types/types';

const HeaderLayout = () => {

    const { user, dispatch } = useContext(AuthContext);    

    const handleLogOut = async () => {       
        window.localStorage.clear()
        dispatch({ type: types.logout, payload: {} })
        window.location = process.env.REACT_APP_LOGOUT_URL
    }

    return(
        <>
            {[false].map(() => (
                <Navbar key={false} bg="legis-default" expand={false} className="mb-3 shadow-sm">
                <Container>
                    <Navbar.Toggle className='border-0' aria-controls={`offcanvasNavbar-expand-${false}`} />
                    <Navbar.Brand>
                        <span className='d-none d-sm-inline'><img src='logo-ecoparque-1.png' alt='Legislatura' height={50} /></span>
                        <span className='d-block d-sm-none'><img src='logo-ecoparque-1.png' alt='Legislatura' height={50} /></span>
                    </Navbar.Brand>
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${false}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
                        placement="start"
                    >
                    <Offcanvas.Header className='border-bottom border-light bg-light' closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                        <IoPersonCircleOutline /> {user.name || "Usuario"} {user.lastname || "Anónimo"}
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav>
                            <Nav.Link href="/soporte"><IoHelpBuoyOutline /> Soporte</Nav.Link>
                            <Nav.Link href="/ayuda"><IoInformationCircleOutline /> Sobre LegisApp</Nav.Link>
                            {/* <Nav.Link href="/visitas"><IoHome /> Visistas Guiadas</Nav.Link> */}
                            <hr />
                            <Nav.Link onClick={handleLogOut} href="/">
                                <IoLogOutOutline /> Cerrar Sesión
                            </Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
                </Navbar>
            ))}
        </>
    )
}

export default HeaderLayout