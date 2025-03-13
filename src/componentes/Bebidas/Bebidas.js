import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export function Bebidas() {
  return (
    <div
    style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '20px', 
      flexWrap: 'wrap',
      padding: '20px'
    }}>
      
      <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Frappe</Card.Title>
    <Card.Img src="Frappe.webp" style={{ marginTop: '10px', borderRadius: '10px' }} />
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroup.Item>Chocolate</ListGroup.Item>
    <ListGroup.Item>Precio $40 </ListGroup.Item>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Agregar</Card.Link>
    <Card.Link href="icono"><i className="bi bi-exclamation-circle-fill"></i></Card.Link>
  </Card.Body>
</Card>


<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Frappe</Card.Title>
    <Card.Img src="Frappe.webp" style={{ marginTop: '10px', borderRadius: '10px' }} />
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroup.Item>Chocolate</ListGroup.Item>
    <ListGroup.Item>Precio $40 </ListGroup.Item>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Agregar</Card.Link>
    <Card.Link href="#"><i className="bi bi-exclamation-circle-fill"></i></Card.Link>
  </Card.Body>
</Card>
  
  
  </div>
  )
}

