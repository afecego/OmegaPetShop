import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { CrearCuenta } from './paginas/auth/CrearCuenta';
import { Login } from './paginas/auth/Login';
import { Home } from './paginas/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/crear-cuenta" element={ <CrearCuenta /> } />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App;
