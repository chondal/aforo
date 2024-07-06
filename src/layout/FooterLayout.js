import {Container, Row, Col, ListGroup} from 'react-bootstrap'
import {FaTwitter, FaFacebookF, FaInstagram, FaYoutube} from 'react-icons/fa'

const FooterLayout = () => {
    return(
        <>
            <footer className='footer-login'>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <Row className='justify-content-center mb-4'>
                                <Col xs={12}>
                                    <div className='border-top border-gray mt-3 mb-3'></div>
                                    <Row>
                                        <Col>
                                            <span className='d-block pt-2 fw-bold text-end'>@GCBA <small style={{fontSize:'.6rem'}}>v 1.1</small></span>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default FooterLayout