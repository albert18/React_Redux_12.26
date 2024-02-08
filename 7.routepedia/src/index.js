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
import CryptoDetail from './CryptoDetail';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>    
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/cryptodetail/:cryptoSymbol/:id" element={<CryptoDetail />}></Route>
        <Route path="/cryptodetail/:cryptoSymbol" element={<CryptoDetail />}></Route>
        {/* Product pages */}

        <Route path="product">
          {/* index or path */}
          <Route index element={<Product />}></Route> 
          <Route path="create" element={<CreateProduct />}></Route>
          <Route path="details/:productId" element={<ProductDetails />}></Route>
          <Route path="productlist" element={<ProductList />}></Route>
        </Route>
        {/* Not found make sure to add the route in the root component */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


