export default function Students() {
    const fullName = "John Doe"
    const programmingExp=10;
    return(
      <div className='container p-4'>
        <div className='row'>Students Enrolled</div>
        <div className='row border p-1'>
          <div className='col-2'>
            <img src={`https://ui-avatars.com/api/?name=${fullName}`}></img>
          </div>
          <div className='col-10'>Programming Experience {programmingExp} years</div>
        </div>
      </div>
    )
  }