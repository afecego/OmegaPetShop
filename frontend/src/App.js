import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { CrearCuenta } from './paginas/auth/CrearCuenta';
import { Login } from './paginas/auth/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/crear-cuenta" element={ <CrearCuenta /> } />
      </Routes>
    </Router>
  )
}

export default App;
