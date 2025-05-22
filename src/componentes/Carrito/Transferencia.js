import React from 'react'
import { Card } from 'react-bootstrap'

export function Transferencia({ producto }) {
    if (!producto) return null
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px'
        }}>
            <Card style={{
                width: '22rem',
                background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
                color: 'white',
                borderRadius: '20px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
            }}>
                <Card.Body>
                    <Card.Title>Datos para Transferencia</Card.Title>
                    <hr style={{ borderColor: 'rgba(255,255,255,0.3)' }} />
                    <div style={{ fontSize: '1.2rem', letterSpacing: '2px', marginBottom: '10px' }}>
                        <strong>Número de tarjeta:</strong><br />
                        1234 5678 9012 3456
                    </div>
                    <div>
                        <strong>Banco:</strong> BBVA<br />
                        <strong>Nombre:</strong> Yesenia Villa Mateo
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Transferencia