import React from 'react'
import { Link } from 'react-router-dom'

export const SidebarNav = () => {
    return (
        <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li className="nav-item">
                    <Link to="/home" className="nav-link">
                        <i className="nav-icon fas fa-tachometer-alt" />
                        <p>
                            Dashboard
                        </p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/productos" className="nav-link">
                        <i className="nav-icon fas fa-shopping-cart" />
                        <p>Productos</p>
                    </Link>

                </li>
                


            </ul>
        </nav>
    )
}
