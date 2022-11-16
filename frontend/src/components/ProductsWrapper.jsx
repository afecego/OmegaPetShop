import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import APIInvoke from '../utils/APIInvoke'
import { Breadcrumb } from './Breadcrumb'
import swal from 'sweetalert'

export const ProductsWrapper = () => {
  const [productos, setProductos] = useState([])

  const cargarProductos = async () => {
    const response = await APIInvoke.invokeGET('/api/products/listall/')
    setProductos(response.result)

  }

  useEffect(() => {

    cargarProductos()

  }, [])

  const eliminarProducto = async (e, id) => {
    e.preventDefault();
    const response = await APIInvoke.invokeDELETE(`/api/products/delete/${id}`)
    if(response.msg === "Producto eliminado"){
      swal({
        title: "Producto Eliminado",
        text: "El producto ha sido eliminado.",
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
      cargarProductos()
    }
  }

  return (
    <div className="content-wrapper">
      <Breadcrumb titleLink="Home" pathLink="/home" pageName="Productos" />
      <section className="content">
        <div className="container-fluid">
          <div className="row">
          <div className="col-12">
          <Link to="/productos/crear" className="btn m-1 btn-primary">
                <i className="fas fa-plus-circle" /> Agregar Producto
              </Link>
              <hr />
          </div>
            <div className="card col-12">
              <div className="card-body p-0">
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th style={{ width: '10%' }}>#</th>
                      <th style={{ width: '30%' }}>Nombre</th>
                      <th style={{ width: '30%' }}>Marca</th>
                      <th style={{ width: '15%' }}>Precio</th>
                      <th style={{ width: ' 15%' }}>Opciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      productos.map((producto, index) => (
                        <tr key={producto._id}>
                          <td>
                            {index + 1}
                          </td>
                          <td>
                            {producto.name}
                          </td>
                          <td>
                            {producto.brand}
                          </td>
                          <td>
                            {producto.price}
                          </td>
                          <td>
                            <Link to={`/productos/editar/${producto._id}`} className="btn-sm m-1 btn-primary">
                              <i className="fas fa-edit" /> Editar
                            </Link>
                            <button onClick={(e) => eliminarProducto(e, producto._id)} className="btn-sm m-1 btn-danger">
                              <i className="fas fa-trash" />
                            </button>

                          </td>
                        </tr>


                      ))
                    }

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
