import React from 'react';
import  { Link, useNavigate, Navigate } from "react-router-dom";
import { useState } from 'react';

function Product() {
  const navigate = useNavigate();
  const [goToProduct, setGoProduct] = useState(() => {
    return false;
  });

  return (
    <div>
      <button className='form-control' onClick={() => { navigate("/product/create")}}>Add Product</button>

      <br />

      <Link to={'/product/details/5'}>
        <button className='form-control'>Navigate to Product Details - 5</button>
      </Link>

      <br />

      { goToProduct && <Navigate to="/product/details/3"/> }
      <button className='form-control' onClick={() => { setGoProduct({ goToProduct: true })}}>Navigate to Product - 3 (useState) </button>




    </div>
  )
}

export default Product