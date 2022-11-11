import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
    return (
        <div className="login-page">
                    <div className="login-box">
            <div className="card card-outline card-primary">
                <div className="card-header text-center">
                    <Link to="/" className="h1"><b>Omega</b>PetShop</Link>
                </div>
                <div className="card-body">
                    <p className="login-box-msg">Ingrese su usuario y contraseña</p>
                    <form action="../../index3.html" method="post">
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="Email" id="email"/>
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-envelope" />
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="Clave" id="password"/>
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-lock" />
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="social-auth-links text-center mt-2 mb-3">
                        <button type="submit" className="btn btn-block btn-primary">
                             Ingresar
                        </button>
                        <Link to="/crear-cuenta" className="btn btn-block btn-danger">
                             Registrarse
                        </Link>
                    </div>

                </div>
            </div>
        </div>
        </div>

    )
}
