import React from 'react'
import { Outlet } from 'react-router-dom'

const ProductRoot = () => {
  return (
    <div>
      <h3>This is Products page</h3>
      <p className="pb-3">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit alias
        atque non tempore perferendis voluptatem, rerum ut eum voluptas, ea ad
        excepturi inventore. Deserunt, dolor at? Non mollitia explicabo quae.
      </p>
      <Outlet />
    </div>
  );
}

export default ProductRoot
