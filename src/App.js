//import {Ejemplos01, } from './componentes/ejemplos'
import { Rutas } from "./routes";
import{ BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Rutas/>
    </BrowserRouter>
  );
}

export default App;