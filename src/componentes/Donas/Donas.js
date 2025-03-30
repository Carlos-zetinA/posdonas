import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const donasData = [
  {
    titulo: 'Donas',
    imagen: 'Cholocate.webp',
    sabores: ['Oreo', 'Ferrero', 'Kiss'],
    precio: 35,
    tipo: 'dona', // Tipo para la categoría de las donas
  },
  {
    titulo: 'Donas Fit',
    imagen: 'Dona Nuez.avif',
    sabores: ['Coco Rayado', 'Fresa', 'Nuez'],
    precio: 20,
    tipo: 'dona', // Tipo para la categoría de las donas
  },
];

const DonaCard = ({ titulo, imagen, sabores, precio, tipo, toggleSelection, selectedItems }) => (
  <Card style={{ width: '18rem', textAlign: 'center' }} className="shadow-lg border-0 rounded-5">
    <Card.Body>
      <Card.Title>{titulo}</Card.Title>
      <Card.Img variant="top" src={imagen} className="rounded" />
    </Card.Body>
    <ListGroup className="list-group-flush">
      {sabores.map((sabor, index) => (
        <ListGroup.Item
          key={index}
          className="d-flex justify-content-between align-items-center"
          style={{ backgroundColor: '#fff', border: 'none' }}
        >
          {sabor} <span className="text-dark">${precio}</span>
          <Link onClick={() => toggleSelection(sabor, tipo)}>
            <i
              className={selectedItems[tipo] === sabor ? 'bi bi-check-square-fill text-success' : 'bi bi-app'}
              style={{ cursor: 'pointer', fontSize: '1.2rem' }}
            ></i>
          </Link>
        </ListGroup.Item>
      ))}
    </ListGroup>
    <Card.Body className="d-flex justify-content-between">
      <Button variant="dark">Agregar</Button>
      <Link to="#">
        <i className="bi bi-exclamation-circle-fill text-danger" style={{ fontSize: '1.3rem' }}></i>
      </Link>
    </Card.Body>
  </Card>
);

export function Donas() {
  const [selectedItems, setSelectedItems] = useState({});

  const toggleSelection = (sabor, tipo) => {
    // Si ya se ha seleccionado un sabor, lo deseleccionamos, si no, seleccionamos este
    setSelectedItems((prev) => ({
      ...prev,
      [tipo]: prev[tipo] === sabor ? null : sabor, // Si el sabor es el mismo, lo deseleccionamos, si no, seleccionamos este
    }));
  };

  return (
    <Container
      fluid
      className="vh-100 vw-100 text-center"
      style={{
        background: 'linear-gradient(to right, rgba(59, 20, 20, 0.94), rgba(109, 29, 76, 0.8))',
        color: 'white',
        padding: '20px',
      }}
    >
      <Row className="g-4" style={{ padding: '40px' }}>
        {donasData.map((dona, index) => (
          <Col key={index} md={4}>
            <DonaCard {...dona} toggleSelection={toggleSelection} selectedItems={selectedItems} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
