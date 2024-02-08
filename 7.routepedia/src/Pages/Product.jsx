import React from 'react'
import  { useNavigate } from "react-router-dom";

function Product() {
  const navigate = useNavigate();

  return (
    <div>
      <button className='form-control' onClick={() => {
          navigate("/product/create")
      }}>Add Product</button>
    </div>
  )
}

export default Product