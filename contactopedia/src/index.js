import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer'
// import RemoveAllContact from './Components/ContactPages/RemoveAllContact'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='container-fluid'>
    <Header></Header>
    {/* <RemoveAllContact></RemoveAllContact> */}
    <Footer></Footer>
  </div>
);

