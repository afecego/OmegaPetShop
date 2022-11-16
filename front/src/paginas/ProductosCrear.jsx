import React from 'react'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { ProductsCrearWrapper } from '../components/ProductsCrearWrapper'
import { Sidebar } from '../components/Sidebar'

export const ProductosCrear = () => {
    return (
        <div className="sidebar-mini">
            <div className="wrapper">
                <Navbar />
                <Sidebar />
                <ProductsCrearWrapper />
                <Footer />
            </div>
        </div>
    )
}
