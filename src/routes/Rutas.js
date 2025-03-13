import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../page";
import { Layout } from "../Layouts"
import {Productos} from "../componentes/formulario";
import { Sesion } from "../componentes/Sesion";
import { Bebidas } from "../componentes/Bebidas";
import { Donas } from "../componentes/Donas";
import { Icono, icono } from "../componentes/icono";


export function Rutas() {
  const Layouts = (Layout, Page) => (
    <Layout>
      <Page />
    </Layout>
  );

  return (
    <Routes>
      <Route path="/" element={Layouts(Layout, Home)} />
   
      <Route path="/formproductos" element={Layouts(Layout,Productos)}/>
      <Route path="/Sesion" element={Layouts(Layout,Sesion)}/>
      <Route path="/bebidas" element={Layouts(Layout,Bebidas)}/>
      <Route path="/donas" element={Layouts(Layout, Donas)}/>
      <Route path="/icono" element={Layouts(Layout,Icono)}/>
    </Routes>
  );
}