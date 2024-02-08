import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import CreateProduct from './Pages/CreateProduct';
import Product from './Pages/Product';
import ProductDetails from './Pages/ProductDetails';
import ProductList from './Pages/ProductList';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>    
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        {/* Product pages */}
        <Route path="/product/createproduct" element={<CreateProduct />}></Route>
        <Route path="/product/create" element={<Product />}></Route>
        <Route path="/product/productdetails" element={<ProductDetails />}></Route>
        <Route path="/product/productlist" element={<ProductList />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


