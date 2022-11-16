import React from 'react'
import { Link } from 'react-router-dom'

export const Breadcrumb = ({titleLink, pathLink, pageName}) => {
  return (
    <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1> {pageName} </h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                    <Link to={pathLink}>{titleLink}</Link>
                </li>
                <li className="breadcrumb-item active"> {pageName} </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
  )
}
