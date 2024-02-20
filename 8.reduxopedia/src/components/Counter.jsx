import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from '../redux/slice/counterSlice';

function Counter() {
  debugger;

  const count = useSelector((state) => state.counterStore.count);
  const dispatch = useDispatch();

  


  debugger;

  return (
    <div className='mt-2 pt-3 pl-2 text-center'>
      <div className='text-white pb-2 h4'>Counter: {count}</div>

      <div className='row'>
        <div className='p-4 col-12 col-md-6'>
          <div className='border p-4'>
            <button className='btn btn-primary' onClick={() => dispatch(increment())}>Add</button>
             &nbsp;
            <button className='btn btn-danger' onClick={() => dispatch(decrement())}>Remove</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Counter