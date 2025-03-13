import React from 'react'
import {Table, Button} from "react-bootstrap"

export function ListProductos() {
  return (
    <div>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre producto</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Unidad</th>
          <th>Imagen</th>
          <th>Editar</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Gallet</td>
          <td>$15</td>
          <td>15</td>
          <td>250gr</td>
          <td><Button variant='success'> Editar</Button></td>
          <td><Button variant='danger'>Eliminar</Button></td>
          <td></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}