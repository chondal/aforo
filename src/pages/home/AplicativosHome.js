import { IoGridOutline } from "react-icons/io5";
import { Row, Col } from 'react-bootstrap'
import { useContext } from "react";
import { AuthContext } from "../../auth/authContext";
import AforoCounter from "./aplicativos/AforoCounter";
import IngresosApp from "./aplicativos/IngresosApp";
import EgresosApp from "./aplicativos/EgresosApp";



const AplicativosHome = () => {
    
    const { user } = useContext(AuthContext);

   

    const now = new Date();
    

    // Formatear la fecha y hora para mostrar
    let formattedDate = now.toLocaleDateString('es-AR', {
        weekday: 'long', // "sábado"
        year: 'numeric', // "2024"
        month: 'long', // "julio"
        day: 'numeric' // "6"
    }) + ' ' + now.toLocaleTimeString('es-AR', {
        hour: '2-digit',
        minute: '2-digit'
    });

    // Asegurar que el primer carácter del día de la semana esté en mayúscula
    formattedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

    

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
            <h6 className="mb-4">{formattedDate}</h6>
                <AforoCounter user={user} />
                <IngresosApp />
                <EgresosApp />
            </Row>
        </>
    )
}

export default AplicativosHome