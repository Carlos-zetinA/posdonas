import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

export function Bebidas() {
  const [selectedItems, setSelectedItems] = useState({});

  // Función para alternar la selección del producto
  const toggleSelection = (item) => {
    setSelectedItems((prev) => ({
      ...prev,
      [item]: !prev[item], // Cambia entre true (seleccionado) y false (no seleccionado)
    }));
  };

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
    },
  ];

  return (
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
  );
}
