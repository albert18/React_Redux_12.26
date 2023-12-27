import Student from './Components/Student/student';
import StudentReview from './Components/Student/StudentReview';
import React from 'react';

 class MainBody extends React.Component {
    render() {
      const whatWeWillLearn = "React JS";
      const lectureCount = 3;
      return(
      <div style={{minHeight: "70vh"}}>
        <p>In this course, we we learn {whatWeWillLearn} by building TaskOPedia!</p>
        Total Lecture - 3
        <br />
        <ul>
          <li>TEST 1</li>
          <li>TEST 2</li>
          <li>TEST 3</li>
        </ul>
        <div className='container-fluid row'>Students Enrolled</div>
          <Student experience={2} name='Kris Walley'>
            <StudentReview/>
          </Student>
          <Student experience={10} name='John Doe'></Student>
        {/* <div>
          Enter Task: <input className='form-control' maxLength={20} placeholder='Enter Notes' readOnly={false}/>
        </div> */}
      </div>
      )
    }
  }

export default MainBody;