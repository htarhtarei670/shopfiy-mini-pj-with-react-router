import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const ContainerRoot = () => {
  return (
    <div className="container">
      <header>
        <h1 className="text-white text-uppercase">Shopify</h1>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="help">Help</NavLink>
            <NavLink to="products">Products</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default ContainerRoot
