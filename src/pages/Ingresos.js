import React, { useState } from 'react';
import { Card, Row, Col, Button, Form } from 'react-bootstrap';
import { IoAddCircleOutline } from 'react-icons/io5';
import { db } from '../config/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const IngresosCounter = () => {
  const [selectedValue, setSelectedValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleButtonClick = (number) => {
    setSelectedValue(number);
  };

  const handleSelectChange = (event) => {
    setSelectedValue(parseInt(event.target.value, 10));
  };

  const handleSubmit = async () => {
    setIsLoading(true); // Activar estado de carga

    // Obtener la fecha actual como un objeto Date
    const now = new Date();

    // Preparar el objeto de datos a enviar a Firestore
    const data = {
      cantidad_personas: selectedValue,
      fecha: Timestamp.fromDate(now), // Convertir la fecha actual a un timestamp de Firestore
      tipo_acceso: 'entrada', // Tipo de acceso entrada según tu requerimiento
      user_id: 'usuario_actual', // Reemplazar con el ID de usuario actual si está autenticado
    };

    try {
      // Guardar los datos en Firestore
      const docRef = await addDoc(collection(db, 'registros'), data);
      console.log('Documento agregado con ID: ', docRef.id);
      toast.success('Datos guardados exitosamente', { autoClose: 2000 });
      navigate("/");

      // Limpiar el valor seleccionado después de enviar
      setSelectedValue(0);
    } catch (error) {
      console.error('Error al agregar documento: ', error);
      toast.error('Ocurrió un error al guardar los datos, vuelva a intentarlo', { autoClose: 2000 });
    } finally {
      setIsLoading(false); // Desactivar estado de carga después de completar
    }
  };

  const handleClear = () => {
    setSelectedValue(0);
  };

  return (
    <Col xs={12} md={6} lg={3}>
      <Card id="ingresos" className='g-0 border-gray shadow-sm mb-4'>
        <Card.Body>
          <Row>
            <Col xs={3}>
              <IoAddCircleOutline size={64} />
            </Col>
            <Col xs={9} className="pt-3">
              <span className="fs-5">Ingresos</span>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="pt-3 text-center">
              <p className="fs-5 m-0 fw-bolder">Seleccione la cantidad de personas</p>
            </Col>
          </Row>
          <Row className="mt-3">
            {/* Columna para números impares */}
            <Col xs={6}>
              {[1, 3, 5].map((number) => (
                <Button
                  key={number}
                  className='btn-lg border-0'
                  style={{
                    backgroundColor: selectedValue === number ? '#198754' : 'gray',
                    color: 'white',
                    width: '100%',
                    marginBottom: '10px'
                  }}
                  onClick={() => handleButtonClick(number)}
                >
                  {number}
                </Button>
              ))}
            </Col>
            {/* Columna para números pares */}
            <Col xs={6}>
              {[2, 4, 6].map((number) => (
                <Button
                  key={number}
                  className='btn-lg border-0'
                  style={{
                    backgroundColor: selectedValue === number ? '#198754' : 'gray',
                    color: 'white',
                    width: '100%',
                    marginBottom: '10px'
                  }}
                  onClick={() => handleButtonClick(number)}
                >
                  {number}
                </Button>
              ))}
            </Col>
          </Row>
          <Row className="mt-4 d-flex justify-content-center">
            <Col xs={8}>
              <Form.Select onChange={handleSelectChange} value={selectedValue}>
                <option value={0}>Más de 6...</option>
                {[...Array(9)].map((_, index) => (
                  <option key={index + 7} value={index + 7}>{index + 7}</option>
                ))}
              </Form.Select>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="mt-3 p-2 rounded-3 bg-secondary text-white fw-bolder d-flex justify-content-between align-items-center">
              <p className="fs-5 m-0 ">Seleccionó {selectedValue} personas</p>
              <Button variant="danger" onClick={handleClear}>
                Limpiar
              </Button>
            </Col>
          </Row>
          <Row className="mt-5 fw-bolder d-flex justify-content-center">
            {selectedValue > 0 && (
              <Col xs={4}>
                <Button
                  className='btn-lg'
                  variant="success"
                  onClick={handleSubmit}
                  disabled={isLoading} // Deshabilitar el botón mientras se está cargando
                >
                  {isLoading ? 'Cargando...' : 'INGRESAR'}
                </Button>
              </Col>
            )}
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default IngresosCounter;
