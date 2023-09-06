import React from 'react'
import { NavLink, useLoaderData, useParams } from 'react-router-dom'

const ProductDetail = () => {
    const { id } = useParams();
    const data = useLoaderData();

    return (
      <div className="d-flex justify-content-center">
        <div className="card p-3" style={{ maxWidth: 890 }}>
          <NavLink to={-1} className='text-decoration-none text-black'>
            {" "}
            <i className="ri-arrow-left-fill"></i> Back
          </NavLink>
          <div className="row g-0">
            <div className="col-md-5">
              <img
                src={data.image}
                className="img-fluid rounded-start pro-img"
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h3 className="card-title">{data.title}</h3>
                <p className="card-text">{data.description}</p>
                <div>
                  <span className="btn btn-primary me-3 py-2 px-3">
                    ${data.price}
                  </span>
                  <span className="btn btn-secondary">
                    Available any color/size
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ProductDetail;

export const productDetailLoader = async({params}) => {
  const { id } = params;
  
    const data = await fetch("http://localhost:3000/products/" + id)

  
  if (!data.ok) {
    throw Error("Could not fectch this source api")
  }
    return data.json();
}
