import React from "react";
import { Menu } from "../componentes/inicio";
import { Footer } from "../page/Footer";

export function Layout({ children }) {
  return (
    <div>
      <div className="menu">
        <Menu />
      </div>
      <div className="body">{children}</div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}