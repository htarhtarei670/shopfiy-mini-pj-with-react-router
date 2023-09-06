import React from 'react'
import { NavLink } from 'react-router-dom';


const Product = ({ data }) => {
    const description = data.description;
    const truncateDescription = description.substring(0, 50) + "...";

    return (
    <>
      <div className="card px-2" style={{ width: 300, minHeight: 420 }}>
        <img src={data.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            {data.title}
            <span className="fs-4 text-danger">(${data.price})</span>
          </h5>
          <p className="card-text text-muted">{truncateDescription}</p>
        </div>
        <NavLink to={data.id.toString()} className="btn btn-primary w-100 float-end mb-2">
          More Detail
        </NavLink>
      </div>
    </>
  );
}

export default Product
