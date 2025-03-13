import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export function Donas() {
  return (
    <div  style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '20px', 
      flexWrap: 'wrap',
      padding: '20px'
    }}>
      
      <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Title>Donas</Card.Title>
    </Card.Body>
    <Card.Img variant="top" src="Cholocate.webp" />
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Chocolate</ListGroup.Item>
      <ListGroup.Item>Precio 25$</ListGroup.Item>
    </ListGroup>
    <Card.Body>
      <Card.Link href="#">Agregar</Card.Link>
      <Card.Link href="#"><i class="bi bi-exclamation-circle-fill"></i></Card.Link>
    </Card.Body>
  </Card>
  
  <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Title>Donas</Card.Title>
    </Card.Body>
    <Card.Img variant="top" src="Cholocate.webp" />
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Glaseado</ListGroup.Item>
      <ListGroup.Item>Precio 24$</ListGroup.Item>
    </ListGroup>
    <Card.Body>
      <Card.Link href="#">Agregar</Card.Link>
      <Card.Link href="#"><i class="bi bi-exclamation-circle-fill"></i></Card.Link>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Title>Donas</Card.Title>
    </Card.Body>
    <Card.Img variant="top" src="Cholocate.webp" />
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Chocolate</ListGroup.Item>
      <ListGroup.Item>Precio 25$</ListGroup.Item>
    </ListGroup>
    <Card.Body>
      <Card.Link href="#">Agregar</Card.Link>
      <Card.Link href="#"><i class="bi bi-exclamation-circle-fill"></i></Card.Link>
    </Card.Body>
  </Card>
  
  
  </div>
  
  )
}


