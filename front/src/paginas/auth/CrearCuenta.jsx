import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import APIInvoke from '../../utils/APIInvoke'
import swal from 'sweetalert'

export const CrearCuenta = () => {
  const [usuario, setUsuario] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmar: ''
  })

  useEffect(() => {
    document.getElementById('nombre').focus()
  }, [])


  const { nombre, email, password, confirmar } = usuario;

  const onChangeHandler = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  const crearCuentaAPI = async () => {
    if (password !== confirmar) {
      const msg = "Las contraseñas deben ser iguales";
      swal({
        title: "Error de clave",
        text: msg,
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
    } else if (password.length < 6) {
      swal({
        title: "Error longitud clave",
        text: "La contraseña debe tener al menos 6 caracteres",
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
        nombre: usuario.nombre,
        email: usuario.email,
        password: usuario.password

      }
      const response = await APIInvoke.invokePOST(`/api/usuarios`, data);

      if( response.msg === "El usuario ya existe" ){
        swal({
          title: "El usuario ya existe",
          text: "El email que intentas ingresar ya se encuentra registrado en nuestra app.",
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
      } else if (response.token.length !== 0){
        swal({
          title: "Usuario creado",
          text: "El usuario se ha creado correctamente.",
          icon: 'success',
          buttons: {
            confirm: {
              text: "Ok",
              value: true,
              visible: true,
              className: 'btn btn-primary',
              closeModal: true
            }
          }
        })
      } else {
        swal({
          title: "Ha ocurrido un error",
          text: "Ha ocurrido un error inesperado",
          icon: 'error',
          buttons: {
            confirm: {
              text: "Ok",
              value: true,
              visible: true,
              className: 'btn btn-error',
              closeModal: true
            }
          }
        })
      }

    }
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    crearCuentaAPI();
    setUsuario({
      nombre: '',
      email: '',
      password: '',
      confirmar: ''
    })
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <Link to="/" className="h1"><b>Crear Cuenta</b></Link>
          </div>
          <div className="card-body">
            <p className="login-box-msg">Ingrese sus datos para crear una cuenta en <b>OmegaPetShop</b></p>
            <form onSubmit={onSubmitHandler}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  id="nombre"
                  name="nombre"
                  value={nombre}
                  onChange={onChangeHandler}
                />

                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={onChangeHandler}
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
                  placeholder="Contraseña"
                  name="password"
                  id="password"
                  value={password}
                  onChange={onChangeHandler}
                />

                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirmar contraseña"
                  name="confirmar"
                  id="confirmar"
                  value={confirmar}
                  onChange={onChangeHandler}
                />

                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>


              <div className="social-auth-links text-center mt-2 mb-3">
                <button type="submit" className="btn btn-block btn-primary">
                  Crear Cuenta
                </button>
                <Link to="/" className="btn btn-block btn-danger">
                  Regresar
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
