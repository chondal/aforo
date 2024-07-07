import React, { useEffect, useState } from 'react';
import { Col, Card, Row, ProgressBar, Container } from 'react-bootstrap';
import { IoAccessibility } from 'react-icons/io5';
import { db } from '../../../config/firebase';
import { collection, query, where, getDocs, onSnapshot } from 'firebase/firestore';

const AforoCounter = ({ user }) => {
  const [aforoActual, setAforoActual] = useState(0);
  const [aforoMaximo, setAforoMaximo] = useState(0); // Valor máximo de aforo inicial (se actualizará con el valor de Firestore)
  const [porcentajeAforo, setPorcentajeAforo] = useState(0);

  useEffect(() => {
    const fetchAforoMaximo = async () => {
      const aforoRef = collection(db, 'aforo_complejo');
      const queryAforo = query(aforoRef, where('complejo', '==', 'ecoParque'));

      try {
        const querySnapshot = await getDocs(queryAforo);
        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          const data = doc.data();
          setAforoMaximo(data.cantidad_maxima);
        } else {
          console.log('No se encontró el documento para el complejo ecoParque');
        }
      } catch (error) {
        console.error('Error al obtener el aforo máximo:', error);
      }
    };

    fetchAforoMaximo();
  }, []);

  useEffect(() => {
    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);

    const endOfToday = new Date();
    endOfToday.setHours(23, 59, 59, 999);

    const registrosRef = collection(db, 'registros');
    const queryToday = query(registrosRef, where("fecha", ">=", startOfToday), where("fecha", "<=", endOfToday));

    const unsubscribe = onSnapshot(queryToday, (querySnapshot) => {
      let totalPersonas = 0;

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.tipo_acceso === 'entrada') {
          totalPersonas += data.cantidad_personas;
        } else if (data.tipo_acceso === 'salida') {
          totalPersonas -= data.cantidad_personas;
        }
      });

      setAforoActual(totalPersonas);
      setPorcentajeAforo((totalPersonas / aforoMaximo) * 100);
    }, (error) => {
      console.error('Error al obtener los registros:', error);
    });

    // Limpiar el listener cuando el componente se desmonte
    return () => unsubscribe();
  }, [db, setAforoActual, setPorcentajeAforo, aforoMaximo]);

  const getProgressBarVariant = (percentage) => {
    if (percentage < 50) return "success"; // Verde si es menos del 50%
    if (percentage < 75) return "warning"; // Amarillo si es menos del 75%
    return "danger"; // Rojo si es igual o mayor al 75%
  };

  return (
    <Container style={{ display: 'flex', justifyContent: 'center' }}>
      <Col xs={12} md={6} lg={6}>
        <Card id="aforoCounter" className='g-0 border-gray shadow-sm mb-4 animate__animated animate__fadeInUp'>
          <Card.Body>
            <Row>
              <Col xs={3}>
                <IoAccessibility size={64} />
              </Col>
              <Col xs={9} className="pt-3">
                <span className="fs-5">Aforo {Math.round(aforoActual)} / {aforoMaximo}</span>
                <ProgressBar
                  now={porcentajeAforo}
                  label={`${Math.round(porcentajeAforo)}%`}
                  variant={getProgressBarVariant(porcentajeAforo)}
                  className="mt-3"
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
}

export default AforoCounter;
