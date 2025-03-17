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

  return (
    <div
      style={{ 
        display: 'flex', 
        gap: '20px', 
        flexWrap: 'wrap',
        padding: '20px'
      }}
    >
      <Card style={{ width: '18rem', textAlign: 'center' }}>
        <Card.Body>
          <Card.Title>Frappe</Card.Title>
          <Card.Img src="Frappe.webp" />
        </Card.Body>
        <ListGroup className="list-group-flush">
          {['Cokkies', 'Chocolate', 'Moka'].map((sabor, index) => (
            <ListGroup.Item key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {sabor} <span>$45 
                <Link onClick={() => toggleSelection(`${sabor}-Frappe`)}>
                  <i 
                    className={selectedItems[`${sabor}-Frappe`] ? "bi bi-check-square-fill" : "bi bi-app"} 
                    style={{ color: selectedItems[`${sabor}-Frappe`] ? 'blue' : 'black', cursor: 'pointer' }}
                  ></i>
                </Link>
              </span>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Agregar</Card.Link>
          <Card.Link href="#"><i class="bi bi-exclamation-circle-fill"></i></Card.Link>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', textAlign: 'center' }}>
        <Card.Body>
          <Card.Title>Yogurt</Card.Title>
          <Card.Img src="yo.png" />
        </Card.Body>
        <ListGroup className="list-group-flush">
          {['Natural', 'Griego', 'Fresa'].map((sabor, index) => (
            <ListGroup.Item key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {sabor} <span>$40 
                <Link onClick={() => toggleSelection(`${sabor}-Yogurt`)}>
                  <i 
                    className={selectedItems[`${sabor}-Yogurt`] ? "bi bi-check-square-fill" : "bi bi-app"} 
                    style={{ color: selectedItems[`${sabor}-Yogurt`] ? 'blue' : 'black', cursor: 'pointer' }}
                  ></i>
                </Link>
              </span>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Agregar</Card.Link>
          <Card.Link href="#"><i class="bi bi-exclamation-circle-fill"></i></Card.Link>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', textAlign: 'center' }}>
        <Card.Body>
          <Card.Title>Café</Card.Title>
          <Card.Img src="cafe1.png" />
        </Card.Body>
        <ListGroup className="list-group-flush">
          {['Mocca', 'Latte', 'Americano'].map((sabor, index) => (
            <ListGroup.Item key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {sabor} <span>$35 
                <Link onClick={() => toggleSelection(`${sabor}-Cafe`)}>
                  <i 
                    className={selectedItems[`${sabor}-Cafe`] ? "bi bi-check-square-fill" : "bi bi-app"} 
                    style={{ color: selectedItems[`${sabor}-Cafe`] ? 'blue' : 'black', cursor: 'pointer' }}
                  ></i>
                </Link>
              </span>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Agregar</Card.Link>
          <Card.Link href="#"><i class="bi bi-exclamation-circle-fill"></i></Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}


