import { IoGridOutline } from "react-icons/io5";
import { Row, Col } from 'react-bootstrap'
import { useContext } from "react";
import { AuthContext } from "../../auth/authContext";
import RecibosApp from "./aplicativos/RecibosApp";
import CredencialApp from "./aplicativos/CredencialApp";

const AplicativosHome = () => {
    
    const { user } = useContext(AuthContext);

    return(
        <>
            <Row className='mb-2'>
                <Col xs={12}>
                    <h5 id="bienvenido" className='fw-light border-bottom border-gray pb-2'>
                        <IoGridOutline /> Aforo
                    </h5>
                </Col>
            </Row>
            <Row className='mb-2 animate__animated animate__fadeIn animate_fadeOut'>
                {/* <CredencialApp user={user} />
                <RecibosApp user={user} /> */}
            </Row>
        </>
    )
}

export default AplicativosHome