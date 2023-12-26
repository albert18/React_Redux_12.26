import { faker } from '@faker-js/faker';

export default function Student(props) { // Props keyword is a fix name, use this to pass in the parameters.
    return(
      <div className='container p-4'>
        <div className='row border p-1'>
          <div className='col-2'>
            <img src={faker.image.people()} className='w-100'></img>
          </div>
          <div className='col-10'>Programming Experience {props.experience} years</div>
        </div>
      </div>
    )
  }