import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import CreateProduct from './Pages/CreateProduct';
import Product from './Pages/Product';
import ProductDetails from './Pages/ProductDetails';
import ProductList from './Pages/ProductList';
import NotFound from './NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>    
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        {/* Product pages */}

        <Route path="product">
          {/* index or path */}
          <Route index element={<Product />}></Route> 
          <Route path="create" element={<CreateProduct />}></Route>
          <Route path="productdetails" element={<ProductDetails />}></Route>
          <Route path="productlist" element={<ProductList />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


