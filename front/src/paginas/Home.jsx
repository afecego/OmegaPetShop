import React from 'react'
import { HomeWrapper } from '../components/HomeWrapper'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'

export const Home = () => {
  return (
    <div className="sidebar-mini">
      <div className="wrapper">
        <Navbar />
        <Sidebar />
        <HomeWrapper />
        <Footer />
      </div>
    </div>

  )
}
