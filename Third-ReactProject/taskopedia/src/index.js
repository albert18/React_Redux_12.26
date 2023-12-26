import ReactDOM from 'react-dom/client';
import "./CSS/style.css";
import Header from './header';
import Students from './students';

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

