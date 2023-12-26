export default function MainBody() {
    const whatWeWillLearn = "React JS";
    const lectureCount = 3;
    return(
    <div>
      <p>In this course, we we learn {whatWeWillLearn} by building TaskOPedia!</p>
      Total Lecture - 3
      <br />
      <ul>
        <li>TEST 1</li>
        <li>TEST 2</li>
        <li>TEST 3</li>
      </ul>
      {/* <div>
        Enter Task: <input className='form-control' maxLength={20} placeholder='Enter Notes' readOnly={false}/>
      </div> */}
      <br />
    </div>
    )
  }