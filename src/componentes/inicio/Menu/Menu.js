import React from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function Menu() {
  const navigate = useNavigate();

  return (
    <Container>
      <Tabs
        defaultActiveKey="sesion"
        id="justify-tab-example"
        className="mb-3"
        justify
        onSelect={(key) => navigate(`/${key}`)} // Redirige al seleccionar una pestaña
      >
        <Tab eventKey="Sesion" title="Iniciar Sesión"></Tab>
        <Tab eventKey="bebidas" title="Bebidas"></Tab>
        <Tab eventKey="donas" title="Donas"></Tab>
        <Tab eventKey="carrito" title="🛒"></Tab>
      </Tabs>
    </Container>
  );
}

export default Menu;
