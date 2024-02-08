import React from 'react'
import  { Link, useNavigate } from "react-router-dom";

function Product() {
  const navigate = useNavigate();

  return (
    <div>
      <button className='form-control' onClick={() => { navigate("/product/create")}}>Add Product</button>

      <br />

      <Link to={'/product/details/5'}>
        <button className='form-control'>Navigate to Product Details - 5</button>
      </Link>



      
    </div>
  )
}

export default Product