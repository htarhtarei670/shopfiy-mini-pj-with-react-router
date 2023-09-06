import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

const ProductError = () => {
    const error = useRouteError();
  return (
    <div>
      <h2>this is error page</h2>
      <p>{error.message}</p>
      <NavLink to="/" className="text-white text-decoration-none">
        Go to <span className="text-decoration-underline">home page</span>
      </NavLink>
    </div>
  );
}

export default ProductError
