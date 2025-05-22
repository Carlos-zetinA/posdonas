import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Card, ListGroup, Button, Form, Alert } from 'react-bootstrap';

export function ListaUsuarios() {
  const location = useLocation();
  const navigate = useNavigate();
  const usuarios = location.state?.usuarios || []; // Obtener la lista de usuarios del estado

  const [adminCorreo, setAdminCorreo] = useState('');
  const [adminContraseña, setAdminContraseña] = useState('');
  const [error, setError] = useState('');
  const [autenticado, setAutenticado] = useState(false);

  // Credenciales del administrador
  const adminCredenciales = {
    correo: 'admin@example.com',
    contraseña: 'admin123',
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (adminCorreo === adminCredenciales.correo && adminContraseña === adminCredenciales.contraseña) {
      setAutenticado(true);
      setError('');
    } else {
      setError('Credenciales incorrectas. Inténtalo de nuevo.');
    }
  };

  const handleRegresar = () => {
    navigate('/'); // Redirigir al inicio de sesión
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center vh-100 vw-100 text-center"
      style={{
        background: 'linear-gradient(to right,rgba(59, 20, 20, 0.94), rgba(109, 29, 76, 0.8))',
      }}
    >
      <Card style={{ width: '30rem', padding: '20px' }}>
        <Card.Body>
          {!autenticado ? (
            <>
              <Card.Title className="text-center">Acceso de Administrador</Card.Title>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="adminEmail">
                  <Form.Label>Correo de Administrador</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingresa tu correo"
                    value={adminCorreo}
                    onChange={(e) => setAdminCorreo(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="adminPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    value={adminContraseña}
                    onChange={(e) => setAdminContraseña(e.target.value)}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  Iniciar Sesión
                </Button>
              </Form>
            </>
          ) : (
            <>
              <Card.Title className="text-center">Usuarios Registrados</Card.Title>
              {usuarios.length === 0 ? (
                <p>No hay usuarios registrados.</p>
              ) : (
                <ListGroup>
                  {usuarios.map((usuario, index) => (
                    <ListGroup.Item key={index}>
                      <strong>Correo:</strong> {usuario.correo} <br />
                      <strong>Contraseña:</strong> {usuario.contraseña}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
              <Button
                variant="primary"
                className="mt-3 w-100"
                onClick={handleRegresar}
              >
                Inicio de Sesión
              </Button>
            </>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}