import React from 'react';
import { Container } from 'react-bootstrap';

export function Home() {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center vh-100 vw-100 text-center"
      style={{
        background: 'linear-gradient(to right, #1a1a1a,white(241, 237, 237, 0.95))',
        display: 'flex',
      }}
    >
      {/* Texto de Bienvenida */}
      <div style={{ flex: 1, textAlign: 'center' }}>
        <h1
          style={{
            fontSize: '6rem',
            fontWeight: 'bold',
            color: '#ff0080',
            textShadow: '0 0 20px #red, 0 0 40px #ff00ff',
            fontFamily: "'Press Start 2P', cursive",
            letterSpacing: '10px',
          }}
        >
          BIENVENIDO
        </h1>

        <h2
          style={{
            fontSize: '5rem',
            fontWeight: 'bold',
            color: '#ffcc00',
            textShadow: '0 0 20pxrgb(174, 0, 255), 0 0 40pxrgb(212, 255, 102)',
            fontFamily: "'Press Start 2P', cursive",
            letterSpacing: '8px',
          }}
        >
          A CLOUD & GLAZE
        </h2>

        <p
          style={{
            fontSize: '2rem',
            color: '#ffffff',
            textShadow: '0 0 10pxrgba(43, 20, 20, 0), 0 0 20pxrgb(204, 204, 204)',
            fontFamily: "'Poppins', sans-serif",
            marginTop: '20px',
          }}
        >
          ¡Disfruta las mejores donas y bebidas con un toque especial!
        </p>
      </div>

      {/* Imagen de la Dona */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <img
          src="dona.jpg"
          alt="Dona Glaseada"
          style={{
            width: '500px',
            height: 'auto',
            
          }}
        />
      </div>
    </Container>
  );
}