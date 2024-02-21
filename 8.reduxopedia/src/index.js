import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import { store } from "./redux/store";
import {  Provider } from "react-redux";
import Counter from './components/Counter';
import DestinationList from './components/DestinationList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='text-white'>
    <Provider store={store}>
      <Header />
      <Counter />
      <div className='p-4 border text-center'>
        <h4 className='text-success'>Destination List</h4>
        <DestinationList />
      </div>
    </Provider>
  </div>
);


