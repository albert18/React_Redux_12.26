import React from 'react'
import { useSelector } from 'react-redux'

function DestinationList() {
  const destinationList = useSelector((state) => state.destinationStore.destinations);
  debugger;
    console.log(destinationList);


  return destinationList.map((destination, index) => {
    return (
        <div 
            className='text-center text-white row' 
            style={{ borderBottom: "1px solid #333"}} 
            key={index}>
            <div className='col-8 col-md-3 offset-md-3 pt-2'>{destination.name}</div>
        </div>
    );
  });
}

export default DestinationList