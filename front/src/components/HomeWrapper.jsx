import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import APIInvoke from '../utils/APIInvoke';
import { Breadcrumb } from './Breadcrumb'

export const HomeWrapper = () => {
  const [totalProductos, settotalProductos] = useState('');
  const obtenerTotalProductos = async () =>{
    const response = await APIInvoke.invokeGET('/api/products/listall');
    if(response.result.length > 0){
      settotalProductos(response.result.length)
    }
  }
  useEffect(() => {
    obtenerTotalProductos()
  }, [])
  

  return (
    <div className="content-wrapper">
      <Breadcrumb titleLink="Home" pathLink="/home" pageName="Dashboard" />
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-6">
              <div className="small-box bg-info">
                <div className="inner">
                  <h3>{totalProductos}</h3>
                  <p>Nuevos Productos</p>
                </div>
                <div className="icon">
                  <i className="ion fas fa-shopping-cart" />
                </div>
                <Link to="/productos" className="small-box-footer">Ver más <i className="fas fa-arrow-circle-right" /></Link>
              </div>
            </div>
          </div>
        </div>

      </section>

    </div>
  )
}
