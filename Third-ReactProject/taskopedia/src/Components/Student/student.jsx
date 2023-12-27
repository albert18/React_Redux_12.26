import { faker } from '@faker-js/faker';
import React from 'react';

class Student extends React.Component { // Props keyword is a fix name, use this to pass in the parameters.
  render() {
    return(
      <div className='container p-4'>
        <div className='row border p-1'>
          <div className='col-2'>
            <img src={faker.image.people()} className='w-100'></img>
          </div>
          <div className='col-6'>
            {this.props.name}
            <br />
            Programming Experience {this.props.experience} years
            </div>
          <div className='col-2'>
          {this.props.children}  
          </div>
        </div>
      </div>
    )
  }
}


export default Student;