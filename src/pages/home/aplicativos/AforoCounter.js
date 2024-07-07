import React, { useEffect, useState } from 'react';
import { Col, Card, Row, ProgressBar } from 'react-bootstrap';
import { IoAccessibility } from 'react-icons/io5';
import { db } from '../../../config/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

const AforoCounter = ({ user }) => {
    const [aforoActual, setAforoActual] = useState(0);
    const aforoMaximo = 100; // Valor máximo de aforo
    const [porcentajeAforo, setPorcentajeAforo] = useState(0);

    useEffect(() => {
      const getAforo = async () => {
          try {
            
            
            const startOfToday = new Date();
            startOfToday.setHours(0, 0, 0, 0);
      
            // Crear un objeto Date para el final del día de hoy
            const endOfToday = new Date();
            endOfToday.setHours(23, 59, 59, 999);
      
            // Referencia a la colección 'registros'
            const registrosRef = collection(db, 'registros');
      
            // Asegurarse de que ambos filtros de desigualdad usen el mismo campo 'fecha'
            const queryToday = query(registrosRef, where("fecha", ">=", startOfToday), where("fecha", "<=", endOfToday));
      
            // Obtener los documentos filtrados
            const querySnapshotRegistros = await getDocs(queryToday);
              


              
              

              let totalPersonas = 0;
              let totalEntradas = 0;
              let totalSalidas = 0;

              querySnapshotRegistros.forEach((doc) => {
                  const data = doc.data();
                  if (data.tipo_acceso === 'entrada') {
                      totalPersonas += data.cantidad_personas;
                      totalEntradas++;
                  } else if (data.tipo_acceso === 'salida') {
                      totalPersonas -= data.cantidad_personas;
                      totalSalidas++;
                  }
              });

              setAforoActual(totalPersonas);
              const promedio = totalPersonas / (totalEntradas + totalSalidas);
              setPorcentajeAforo((totalPersonas / aforoMaximo) * 100);
          } catch (error) {
              console.error('Error al obtener los registros:', error);
              // Manejo de errores
          }
      };

      getAforo();
  }, []); // Se ejecuta solo una vez al montar el componente

  const getProgressBarVariant = (percentage) => {
    if (percentage < 50) return "success"; // Verde si es menos del 50%
    if (percentage < 75) return "warning"; // Amarillo si es menos del 75%
    return "danger"; // Rojo si es igual o mayor al 75%
  };
    return (
        <Col xs={12} md={6} lg={3}>
            <Card id="aforoCounter" className='g-0 border-gray shadow-sm mb-4'>
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
    );
}

export default AforoCounter;


      

