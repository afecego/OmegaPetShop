import React from 'react'
import { ProductsWrapper } from '../components/ProductsWrapper'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'

export const Productos = () => {
  return (
    <div className="sidebar-mini">
      <div className="wrapper">
        <Navbar />
        <Sidebar />
        <ProductsWrapper />
        <Footer />
      </div>
    </div>
  )
}

