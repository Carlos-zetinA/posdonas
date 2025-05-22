import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Dona } from '../../api/donas';

export function Donas() {
  const [selectedItems, setSelectedItems] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [selectedDona, setSelectedDona] = useState(null);
  const donaController = new Dona();

  const donas = [
    {
      titulo: 'Donas',
      imagen: 'Cholocate.webp',
      sabores: ['Oreo', 'Ferrero', 'Kiss'],
      precio: 35,
      descripcion: 'Donas clásicas con sabores irresistibles.',
      tipo: 'dona',
    },
    {
      titulo: 'Donas Fit',
      imagen: 'Dona Nuez.avif',
      sabores: ['Coco Rayado', 'Fresa', 'Nuez'],
      precio: 20,
      descripcion: 'Donas saludables y deliciosas.',
      tipo: 'dona',
    },
  ];

  // Selección de sabor
  const toggleSelection = (sabor, tipo) => {
    setSelectedItems((prev) => ({
      ...prev,
      [tipo]: prev[tipo] === sabor ? null : sabor,
    }));
  };

  // Mostrar modal de detalles
  const handleShowModal = (dona) => {
    setSelectedDona(dona);
    setShowModal(true);
  };

  // Agregar dona
  const handleAgregar = async (dona) => {
    const saborSeleccionado = selectedItems[dona.tipo];
    if (!saborSeleccionado) {
      alert('Selecciona un sabor antes de agregar.');
      return;
    }

    const data = {
      titulo: dona.titulo,
      imagen: dona.imagen,
      sabor: saborSeleccionado,
      precio: dona.precio,
    };

    try {
      await donaController.createDona(data);
      alert("Dona agregada correctamente");
      setSelectedItems((prev) => ({ ...prev, [dona.tipo]: null }));
    } catch (error) {
      console.log(error);
      alert("Error al agregar dona");
    }
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
        {donas.map((dona, index) => (
          <Col key={index} md={4}>
            <Card style={{ width: '20rem', textAlign: 'center' }} className="shadow-lg border-0 rounded-5">
              <Card.Body>
                <Card.Title className="text-dark" style={{ fontWeight: 'bold' }}>
                  {dona.titulo}
                </Card.Title>
              </Card.Body>
              <Card.Img variant="top" src={dona.imagen} className="rounded" />
              <ListGroup className="list-group-flush">
                {dona.sabores.map((sabor, idx) => (
                  <ListGroup.Item
                    key={idx}
                    className="d-flex justify-content-between align-items-center"
                    style={{ backgroundColor: '#fff', border: 'none' }}
                  >
                    {sabor} <span className="text-dark">${dona.precio}</span>
                    <Link onClick={() => toggleSelection(sabor, dona.tipo)}>
                      <i
                        className={
                          selectedItems[dona.tipo] === sabor
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
                <Button variant="dark" onClick={() => handleAgregar(dona)}>Agregar</Button>
                <Link to="#" onClick={() => handleShowModal(dona)}>
                  <i className="bi bi-exclamation-circle-fill text-danger" style={{ fontSize: '1.3rem' }}></i>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal de detalles */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedDona?.titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={selectedDona?.imagen}
            alt={selectedDona?.titulo}
            className="img-fluid mb-3"
          />
          <p>{selectedDona?.descripcion}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
