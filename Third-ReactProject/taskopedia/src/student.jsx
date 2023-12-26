export default function Student(props) {
    return(
      <div className='container p-4'>
        <div className='row border p-1'>
          <div className='col-2'>
            <img src={`https://ui-avatars.com/api/?name=${props.name}`}></img>
          </div>
          <div className='col-10'>Programming Experience {props.experience} years</div>
        </div>
      </div>
    )
  }