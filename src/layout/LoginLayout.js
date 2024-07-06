import { Container, Navbar} from 'react-bootstrap'
import FooterLayout from './FooterLayout'

const LoginLayout = ({children}) => {
    return(
        <>
            <Navbar bg="light" className='shadow-sm'>
                <Container fluid className='justify-content-center'>
                    <Navbar.Brand className='m-auto'>
                        <img src='/logo-ecoparque-1.png' alt='gcba' height={50} />
                    </Navbar.Brand>
                </Container>
            </Navbar>
                <main>{children}</main>
            <FooterLayout />
        </>
    )
}

export default LoginLayout