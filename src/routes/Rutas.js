import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../page";
import { Layout } from "../Layouts";
import { Sesion } from "../componentes/Sesion";
import { Bebidas } from "../componentes/Bebidas";
import { Donas } from "../componentes/Donas";
import { Icono } from "../componentes/icono";
import { Pedidos } from "../componentes/Pedidos";

export function Rutas() {
  const Layouts = (LayoutComponent, PageComponent) => (
    <LayoutComponent>
      <PageComponent />
    </LayoutComponent>
  );

  return (
    <Routes>
      <Route path="/" element={Layouts(Layout, Home)} />
      <Route path="/sesion" element={Layouts(Layout, Sesion)} />
      <Route path="/bebidas" element={Layouts(Layout, Bebidas)} />
      <Route path="/donas" element={Layouts(Layout, Donas)} />
      <Route path="/icono" element={Layouts(Layout, Icono)} />
      <Route path="/pedidos" element={Layouts(Layout, Pedidos)}/>
    </Routes>
  );
}
