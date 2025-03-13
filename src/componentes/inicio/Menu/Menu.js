import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


export function Menu() {
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand as={Link} ></Navbar.Brand>
          <Nav className="me-auto">
          <Link className="nav-link" to="/Sesion">Iniciar Sesión</Link>
            <Link className="nav-link" to="/bebidas">Bebidas</Link>
            <Link className="nav-link" to="/donas">Donas</Link>
            <Link className="nav-link" to="/catalogo">Pedidos</Link>
            <Link className="nav-link" to="/registro"></Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Buscar"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
}