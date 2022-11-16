import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import swal from 'sweetalert';
import APIInvoke from '../utils/APIInvoke';
import { Breadcrumb } from './Breadcrumb'

export const ProductsEditarWrapper = () => {
    const [productoEditar, setProductoEditar] = useState({
        id: '',
        name: '',
        brand: '',
        price: 0
    })
    const navigate = useNavigate();
    const {idProductoEditar} = useParams()

    

    const obtenerProducto = async () => {
        const response = await APIInvoke.invokeGET(`/api/products/listall/${idProductoEditar}`)
        if(response.message === "Failed to execute"){
            console.log('hubo un error obteniendo el producto')
        } else {
            
            setProductoEditar({
                id: response.result._id,
                name: response.result.name,
                brand: response.result.brand,
                price: response.result.price
            })
        }
    }


    const editarProducto = async () => {
        const data = {
            name: productoEditar.name,
            brand: productoEditar.brand,
            price: productoEditar.price
        }

        const response = await APIInvoke.invokePUT(`/api/products/update/${productoEditar.id}`, data);
        if(response.message === 'Failed to execute' ){
            swal({
                title: "Error al editar",
                text: "Hubo un error al editar, verifique los campos.",
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
            return;
        } else {
            swal({
                title: "Producto Editado",
                text: "El producto se ha editado correctamente.",
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
              navigate('/productos')
        }

    }


    useEffect(() => {
        obtenerProducto()
    }, [])
    
    const onChangeHandler = (e) => {
        e.preventDefault();
        setProductoEditar({
            ...productoEditar,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        editarProducto()
        
    }

    
  return (
    <div className="content-wrapper">
    <Breadcrumb titleLink="Lista Productos" pathLink="/productos" pageName="Crear Producto" />
    <section className="content">
        <div className="container-fluid">
            <div className="row">

                <div className="col-12">
                    <div className="card card-primary">
                        <div className="card-header">
                            <h3 className="card-title">Editar Producto</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={e => onSubmitHandler(e)}>
                                <div className="form-group">
                                    <label htmlFor="name">Nombre Producto</label>
                                    <input
                                        required
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="form-control"
                                        value={productoEditar.name}
                                        onChange={e => onChangeHandler(e)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="brand">Marca</label>
                                    <input
                                        required
                                        type="text"
                                        id="brand"
                                        name="brand"
                                        className="form-control"
                                        value={productoEditar.brand}
                                        onChange={e => onChangeHandler(e)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="price">Precio</label>
                                    <input
                                        required
                                        type="number"
                                        id="price"
                                        name="price"
                                        className="form-control"
                                        value={productoEditar.price}
                                        onChange={e => onChangeHandler(e)}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">Agregar</button>
                            </form>
                        </div>
                    </div>
                </div>





            </div>
        </div>

    </section>

</div>
  )
}
