import React, {useState} from 'react'
import "./Ejemplos01.scss";

import { Ejemplo02 } from '../Ejemplo02/Ejemplo02';

export  function Ejemplos01() {
  const [contador, setContador]=useState(0);

  const IncrementarValor =() =>{
    setContador(contador +1);
  };
    const DecrementarValor =() =>{
      setContador(contador -1);
  }
  const fondo={
    tema:{
      backgroundColor:'black',
      color:'white'
    }
  }

  return (
    <div >
     <Ejemplo02 contador={contador}
     incrementar={IncrementarValor}
     decrementar={DecrementarValor}
     fondo={fondo}
     />
    </div>
    
  );
}