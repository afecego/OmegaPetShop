import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { CrearCuenta } from './paginas/auth/CrearCuenta';
import { Login } from './paginas/auth/Login';
import {Home, Productos, ProductosCrear, ProductosEditar} from './paginas'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/crear-cuenta" element={ <CrearCuenta /> } />
        <Route path="/home" element={<Home />} />
        <Route path="/productos" element={ <Productos /> } />
        <Route path="/productos/crear" element={ <ProductosCrear /> } />
        <Route path="/productos/editar/:idProductoEditar" element={ <ProductosEditar /> } />
      </Routes>
    </Router>
  )
}

export default App;
