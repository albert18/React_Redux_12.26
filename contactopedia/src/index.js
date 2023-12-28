import React from 'react';
import ReactDOM from 'react-dom/client';
import ContactIndex from './Components/ContactPages/ContactIndex'
// import RemoveAllContact from './Components/ContactPages/RemoveAllContact'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='container-fluid'>
    <ContactIndex></ContactIndex>
  </div>
);

