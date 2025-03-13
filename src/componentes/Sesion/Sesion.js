import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function Sesion() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Datos enviados correctamente');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card style={{ width: '22rem', padding: '20px' }}>
        <Card.Body>
          <Card.Title className="text-center">Inicio de Sesión</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Gmail</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu correo" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Ingresa tu contraseña" required />
            </Form.Group>
<Link to="/"><Button variant="primary" type="submit" className="w-100">
              Agregar correo
            </Button></Link>
            
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
