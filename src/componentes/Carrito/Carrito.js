import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Dona } from '../../api/donas';
import { Modal } from 'react-bootstrap';
import {Transferencia} from './Transferencia'

export function Carrito() {
    const [productos, setProductos] = useState([]);
    const [selecDona, setSelecDona] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchDonas = async () => {
            const donaApi = new Dona();
            const data = await donaApi.getDonas();
            setProductos(data);
        };
        fetchDonas();
    }, []);

    const handleEliminar = async (id) => {
        const donaApi = new Dona();
        try {
            await donaApi.deleteDona(id);
            setProductos(productos.filter(producto => producto._id !== id));
        } catch (error) {
            alert("Error al eliminar el producto");
        }
    };

    const handlePagar = (dona)=>{
        setSelecDona(dona);
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
        setSelecDona(null);
    }

    return (
        <div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                flexWrap: 'wrap',
                padding: '20px'
            }}>
                {productos.map((producto, idx) => (
                    <Card style={{ width: '18rem' }} key={idx}>
                        <Card.Body>
                            <Card.Title>{producto.titulo}</Card.Title>
                        </Card.Body>
                        <Card.Img variant="top" src={producto.imagen} />
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>{producto.sabor}</ListGroup.Item>
                            <ListGroup.Item>Precio {producto.precio}$</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#" onClick={() => handleEliminar(producto._id)}>
                                Eliminar
                            </Card.Link>
                            <Card.Link href="#" onClick={() => handlePagar(producto)}>
                                Pagar
                            </Card.Link>
                        </Card.Body>
                    </Card>
                ))}
            </div>
            <Modal show={showModal} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Transferencia</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Transferencia producto={selecDona}/>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Carrito;