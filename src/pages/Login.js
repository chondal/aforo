import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../auth/authContext';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { IoLogInOutline, IoHelpBuoyOutline } from "react-icons/io5";
import LoginLayout from "../layout/LoginLayout";

const Login = () => {
    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const logOn = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, username, password);
            const action = { type: 'LOGIN', payload: userCredential.user };
            dispatch(action);
            navigate('/', { replace: true });
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <LoginLayout>
            <Container>
                <Row className="justify-content-center m-4">
                    <Col xs={12} sm={8} md={6}>
                        <Card className="mb-4 shadow-sm border-gray animate__animated animate__fadeIn">
                            <Card.Body>
                                <Card.Title className="fw-light text-center m-4">
                                    <IoLogInOutline size={60} />
                                </Card.Title>
                                {error && <p className="text-danger text-center">{error}</p>}
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Usuario</Form.Label>
                                        <Form.Control 
                                            type="email" 
                                            placeholder="Ingresa tu correo electrónico" 
                                            value={username} 
                                            onChange={(e) => setUsername(e.target.value)} 
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control 
                                            type="password" 
                                            placeholder="Contraseña" 
                                            value={password} 
                                            onChange={(e) => setPassword(e.target.value)} 
                                        />
                                    </Form.Group>

                                    <div className="d-grid gap-2 mb-4">
                                        <Button onClick={logOn} className="btn-legis" size="lg">Ingresar</Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="justify-content-center mb-4">
                    <Col xs={6}>
                        <p className="text-center">
                            <IoHelpBuoyOutline /><br />
                            <Link to="/soporte" className="link-dark text-decoration-none fw-light">Soporte</Link>
                        </p>
                    </Col>
                </Row>
            </Container>
        </LoginLayout>
    );
};

export default Login;
