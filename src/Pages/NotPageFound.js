import React from 'react'
import {NavLink } from 'react-router-dom';

const NotPageFound = () => {
  return (
    <>
      <h2 className="">This Page not found! </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cum.
      </p>
      <NavLink className="text-white text-decoration-none">
        Go back to <span className="text-decoration-underline"> home page</span>
        .
      </NavLink>
    </>
  );
}

export default NotPageFound
