import React from 'react'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { ProductsEditarWrapper } from '../components/ProductsEditarWrapper'
import { Sidebar } from '../components/Sidebar'

export const ProductosEditar = () => {
  return (
    <div className="sidebar-mini">
    <div className="wrapper">
        <Navbar />
        <Sidebar />
        <ProductsEditarWrapper />
        <Footer />
    </div>
</div>
  )
}
