import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import APIInvoke from '../../utils/APIInvoke'
export const Login = () => {
    const navigate = useNavigate()
    const [usuario, setUsuario] = useState({
        email: '',
        password: ''
    })

    useEffect(() => {
        document.getElementById('email').focus()
    }, [])
    const { email, password } = usuario;


    const iniciarSesion = async () => {
        if (password.length < 6) {
            swal({
                title: "La contraseña debe ser de al menos 6 caracteres",
                text: "Clave incorrecta, debe ser mayor a 6 caracteres",
                icon: 'error',
                buttons: {
                    confirm: {
                        text: "Ok",
                        value: true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }
            })
        } else {
            const data = {
                email: usuario.email,
                password: usuario.password
        
              }
              const response = await APIInvoke.invokePOST(`/api/auth`, data);
              const resMsg = response.msg;
              if(resMsg === "El usuario no existe" || resMsg === "Contraseña incorrecta" ){
                swal({
                    title: "Error al iniciar sesión",
                    text: "Verifique su email y contraseña y vuelta a intentar",
                    icon: 'error',
                    buttons: {
                        confirm: {
                            text: "Ok",
                            value: true,
                            visible: true,
                            className: 'btn btn-danger',
                            closeModal: true
                        }
                    }
                })
              } else {
                const jwt = response.token;
                localStorage.setItem('token', jwt)
                navigate("/home")

              }

        }
    }

    const onChangeHandler = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        iniciarSesion()
    }



    return (
        <div className="login-page">
            <div className="login-box">
                <div className="card card-outline card-primary">
                    <div className="card-header text-center">
                        <Link to="/" className="h1"><b>Omega</b>PetShop</Link>
                    </div>
                    <div className="card-body">
                        <p className="login-box-msg">Ingrese su usuario y contraseña</p>
                        <form onSubmit={onSubmitHandler}>
                            <div className="input-group mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={onChangeHandler}
                                    required
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Clave"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={onChangeHandler}
                                    required
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                        
                        <div className="social-auth-links text-center mt-2 mb-3">
                            <button type="submit" className="btn btn-block btn-primary">
                                Ingresar
                            </button>
                            <Link to="/crear-cuenta" className="btn btn-block btn-danger">
                                Registrarse
                            </Link>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
