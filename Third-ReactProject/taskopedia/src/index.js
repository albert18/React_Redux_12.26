import ReactDOM from 'react-dom/client';
import "./CSS/style.css";
import Header from './header';

const root = ReactDOM.createRoot(document.getElementById('root'));

function MainBody() {
  const whatWeWillLearn = "React JS";
  const lectureCount = 3;
  return(
  <div>
    <p>In this course, we we learn {whatWeWillLearn} by building TaskOPedia!</p>
    Total Lecture - 3
    <br />
    <br />
    <ul>
      <li>TEST 1</li>
      <li>TEST 2</li>
      <li>TEST 3</li>
    </ul>
    <div>
      Enter Task: <input className='form-control' maxLength={20} placeholder='Enter Notes' readOnly={false}/>
    </div>
    <br />
  </div>
  )
}

function Students() {
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

function MainFooter() {
  return(
    <p style={{color:"red", backgroundColor:"blue"}}>THIS FOOTER</p>
  )
}

root.render(
  <div className='container-fluid'>
    <Header />
    <MainBody />
    <Students />
    <MainFooter />
  </div>
);

