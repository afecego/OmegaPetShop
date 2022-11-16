import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import APIInvoke from '../utils/APIInvoke'
import { Breadcrumb } from './Breadcrumb'
import swal from 'sweetalert'

export const ProductsCrearWrapper = () => {
    const [producto, setProducto] = useState({
        name: '',
        brand: '',
        price: 0
    })
    const navigate = useNavigate()

    useEffect(() => {
        document.getElementById('name').focus()
    }, [])

    const { name, brand, price } = producto;
    const onChangeHandler = (e) => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        crearProducto()
    }

    const crearProducto = async () => {
        const data = {
            name,
            brand,
            price
        }

        const response = await APIInvoke.invokePOST('/api/products/create', data)
        const idProducto = response.message._id;

        if(idProducto && name !== '' && brand !== '' && price !== 0){
            swal({
                title: "Producto Creado",
                text: "El producto se ha creado correctamente.",
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
        } else {
            swal({
                title: "Error agregar producto",
                text: "Verifique los campos, el producto no ha sido agregado.",
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
        }

        

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
                                    <h3 className="card-title">Agregar Producto</h3>
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
                                                value={name}
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
                                                value={brand}
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
                                                value={price}
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
