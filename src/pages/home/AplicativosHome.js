import { IoGridOutline } from "react-icons/io5";
import { Row, Col } from 'react-bootstrap'
import { useContext } from "react";
import { AuthContext } from "../../auth/authContext";
import AforoCounter from "./aplicativos/AforoCounter";
import IngresosApp from "./aplicativos/IngresosApp";
import EgresosApp from "./aplicativos/EgresosApp";

const AplicativosHome = () => {
    
    const { user } = useContext(AuthContext);

    return(
        <>
            <Row className='mb-2'>
                <Col xs={12}>
                    <h5 id="bienvenido" className='fw-light border-bottom border-gray pb-2'>
                        <IoGridOutline /> Bienvenido
                    </h5>
                </Col>
            </Row>
            <Row className='mb-2 animate__animated animate__fadeIn animate_fadeOut'>
                <AforoCounter user={user} />
                <IngresosApp />
                <EgresosApp />
            </Row>
        </>
    )
}

export default AplicativosHome