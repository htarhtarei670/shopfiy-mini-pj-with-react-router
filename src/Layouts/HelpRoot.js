import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const HelpRoot = () => {
  return (
    <div>
      <h2 className="pb-2 fs-4">This is help page</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, fugit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta natus
        enim esse aliquam praesentium pariatur iste quas itaque possimus quaerat
        id architecto, aut minima laudantium maiores deleniti cum reprehenderit
        delectus.
      </p>

      <div className='d-flex justify-content-center pt-5'>
        <NavLink to="fqa" className="btn btn-outline-success px-4 py-2 fs-6 text-white">
          FQA
        </NavLink>
        <NavLink to="contact" className="btn btn-outline-success px-4 py-2 fs-6 text-white ms-3">
          Contanct Us
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default HelpRoot
