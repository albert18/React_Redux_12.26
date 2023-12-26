import { faker } from '@faker-js/faker';

const Student = (props) => { // Props keyword is a fix name, use this to pass in the parameters.
    return(
      <div className='container p-4'>
        <div className='row border p-1'>
          <div className='col-2'>
            <img src={faker.image.people()} className='w-100'></img>
          </div>
          <div className='col-6'>
            {props.name}
            <br />
            Programming Experience {props.experience} years
            </div>
          <div className='col-2'>
          {props.children}  
          </div>
        </div>
      </div>
    )
  }

export default Student;