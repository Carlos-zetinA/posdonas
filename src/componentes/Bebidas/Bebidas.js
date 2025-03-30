import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';

export function Bebidas() {
  const [selectedItems, setSelectedItems] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [selectedBebida, setSelectedBebida] = useState(null);

  // Función para alternar la selección del sabor de bebida
  const toggleSelection = (item, bebida) => {
    // Si ya se seleccionó un sabor de esta bebida, desmarcamos todos los sabores de esta bebida
    setSelectedItems((prev) => {
      const newSelectedItems = { ...prev };
      if (newSelectedItems[bebida]) {
        // Si seleccionamos el mismo sabor, lo desmarcamos
        if (newSelectedItems[bebida] === item) {
          newSelectedItems[bebida] = null;
        } else {
          // Si seleccionamos un nuevo sabor, actualizamos la selección
          newSelectedItems[bebida] = item;
        }
      } else {
        // Si nunca se había seleccionado un sabor, lo seleccionamos
        newSelectedItems[bebida] = item;
      }
      return newSelectedItems;
    });
  };

<<<<<<< HEAD
  const bebidas = [
    {
      title: 'Frappe',
      image: 'Frappe.webp',
      sabores: ['Cokkies', 'Chocolate', 'Moka'],
      price: 45,
    },
    {
      title: 'Yogurt',
      image: 'yo.png',
      sabores: ['Natural', 'Griego', 'Fresa'],
      price: 40,
    },
    {
      title: 'Café',
      image: 'cafe1.png',
      sabores: ['Mocca', 'Latte', 'Americano'],
      price: 35,
=======
  // Función para abrir el modal con información de la bebida seleccionada
  const handleShowModal = (bebida) => {
    setSelectedBebida(bebida);
    setShowModal(true);
  };

  const bebidas = [
    {
      titulo: 'Frappe',
      imagen: 'Frappe.webp',
      sabores: ['Cokkies', 'Chocolate', 'Moka'],
      precio: 45,
      descripcion: 'Un delicioso frappe con sabores irresistibles.',
      tipo: 'frappe', // Tipo de bebida
    },
    {
      titulo: 'Yogurt',
      imagen: 'yo.png',
      sabores: ['Natural', 'Griego', 'Fresa'],
      precio: 40,
      descripcion: 'Yogurt cremoso con sabores naturales y saludables.',
      tipo: 'yogurt', // Tipo de bebida
    },
    {
      titulo: 'Café',
      imagen: 'cafe1.png',
      sabores: ['Mocca', 'Latte', 'Americano'],
      precio: 35,
      descripcion: 'Café recién preparado con diferentes opciones de sabor.',
      tipo: 'cafe', // Tipo de bebida
>>>>>>> Carlos
    },
  ];

  return (
<<<<<<< HEAD
    <div
      style={{
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap',
        padding: '20px',
      }}
    >
      {bebidas.map((bebida, index) => (
        <Card key={index} style={{ width: '18rem', textAlign: 'center' }}>
          <Card.Body>
            <Card.Title>{bebida.title}</Card.Title>
            <Card.Img src={bebida.image} />
          </Card.Body>
          <ListGroup className="list-group-flush">
            {bebida.sabores.map((sabor, idx) => (
              <ListGroup.Item key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {sabor}{' '}
                <span>
                  ${bebida.price}{' '}
                  <Link onClick={() => toggleSelection(`${sabor}-${bebida.title}`)} style={{ cursor: 'pointer' }}>
                    <i
                      className={selectedItems[`${sabor}-${bebida.title}`] ? "bi bi-check-square-fill" : "bi bi-app"}
                      style={{ color: selectedItems[`${sabor}-${bebida.title}`] ? 'blue' : 'black' }}
                    ></i>
                  </Link>
                </span>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Agregar</Card.Link>
            <Card.Link href="#">
              <i className="bi bi-exclamation-circle-fill"></i>
            </Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
=======
    <Container
      fluid
      className="vh-10 vw-10 text-center"
      style={{
        background: 'linear-gradient(to right, #3b1414, #6d1d4c)',
        color: 'white',
        padding: '20px',
      }}
    >
      <Row className="g-4" style={{ padding: '40px' }}>
        {bebidas.map((bebida, index) => (
          <Col key={index} md={4}>
            <Card style={{ width: '20rem', textAlign: 'center' }} className="shadow-lg border-0 rounded-5">
              <Card.Body>
                <Card.Title className="text-dark" style={{ fontWeight: 'bold' }}>
                  {bebida.titulo}
                </Card.Title>
              </Card.Body>
              <Card.Img variant="top" src={bebida.imagen} className="rounded" />
              <ListGroup className="list-group-flush">
                {bebida.sabores.map((sabor, idx) => (
                  <ListGroup.Item
                    key={idx}
                    className="d-flex justify-content-between align-items-center"
                    style={{ backgroundColor: '#fff', border: 'none' }}
                  >
                    {sabor} <span className="text-dark">${bebida.precio} </span>
                    <Link
                      onClick={() => toggleSelection(sabor, bebida.tipo)}
                    >
                      <i
                        className={
                          selectedItems[bebida.tipo] === sabor
                            ? 'bi bi-check-square-fill text-success'
                            : 'bi bi-app'
                        }
                        style={{ cursor: 'pointer', fontSize: '1.2rem' }}
                      ></i>
                    </Link>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <Card.Body className="d-flex justify-content-between">
                <Button variant="dark">Agregar</Button> 
                <Link to="#" onClick={() => handleShowModal(bebida)}>
                  <i className="bi bi-exclamation-circle-fill text-danger" style={{ fontSize: '1.3rem' }}></i>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Ventana Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedBebida?.titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={selectedBebida?.imagen}
            alt={selectedBebida?.titulo}
            className="img-fluid mb-3"
          />
          <p>{selectedBebida?.descripcion}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
>>>>>>> Carlos
  );
}
