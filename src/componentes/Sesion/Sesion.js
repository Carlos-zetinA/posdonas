import React, { useState, useEffect } from 'react';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export function Sesion() {
  const [usuarios, setUsuarios] = useState([]);
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Cargar usuarios desde localStorage al iniciar el componente
  useEffect(() => {
    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];
    setUsuarios(usuariosGuardados);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Verificar si el correo ya existe en la lista de usuarios
    const usuarioExistente = usuarios.find((usuario) => usuario.correo === correo);
    if (usuarioExistente) {
      setError('El usuario ya está registrado.');
      return;
    }

    // Si no existe, agregar el nuevo usuario
    const nuevoUsuario = { correo, contraseña };
    const nuevosUsuarios = [...usuarios, nuevoUsuario];
    setUsuarios(nuevosUsuarios);

    // Guardar la lista actualizada en localStorage
    localStorage.setItem('usuarios', JSON.stringify(nuevosUsuarios));

    alert('Usuario agregado correctamente');
    setCorreo('');
    setContraseña('');
    setError(''); // Limpiar el mensaje de error

    // Redirigir a la página principal
    navigate('/');
  };

  const handleVerUsuarios = () => {
    navigate('/lista-usuarios', { state: { usuarios } });
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center vh-100 vw-100 text-center"
      style={{
        background: 'linear-gradient(to right,rgba(59, 20, 20, 0.94), rgba(109, 29, 76, 0.8))',
      }}
    >
      <Card style={{ width: '22rem', padding: '20px' }}>
        <Card.Body>
          <Card.Title className="text-center">Inicio de Sesión</Card.Title>
          <Form onSubmit={handleSubmit}>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Gmail</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu correo"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Agregar usuario
            </Button>
          </Form>

          <Button
            variant="secondary"
            className="w-100 mt-3"
            onClick={handleVerUsuarios}
          >
            Ver lista de usuarios ({usuarios.length})
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}