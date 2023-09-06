import React from 'react'
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const ProductList = () => {
    const datas = useLoaderData();
  return (
    <div className='cards'>
          {datas.map((data) => <Product data={data } key={data.id} />)}
    </div>
  );
}

export default ProductList

export const cardLoader =async () => {
  const data = await fetch("http://localhost:3000/products")
  
  if (!data.ok) {
    throw Error("Could not fetch this source api")
  }
  
  return (data.json())
}

