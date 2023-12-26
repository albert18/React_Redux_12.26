import ReactDOM from 'react-dom/client';
import "./CSS/style.css"

const root = ReactDOM.createRoot(document.getElementById('root'));

function MainHeader() {
  return(<h1 className="heading1">HEADER</h1>)
}

const subHeaderStyle = {
  color: "red",
  backgroundColor:"yellow",
}

function SubHeader() {
  return(<p style={subHeaderStyle}>SUB-HEADING</p>)
}

function Header() {
  return(
    <div>
      <MainHeader></MainHeader>
      <SubHeader></SubHeader>
    </div>
  )
}

function MainBody() {
  const whatWeWillLearn = "React JS";
  
  return(
  <div>
    <p>In this course, we we learn {whatWeWillLearn} by building TaskOPedia!</p>
    <ul>
      <li>TEST 1</li>
      <li>TEST 2</li>
      <li>TEST 3</li>
    </ul>
  </div>
  )
}

function MainFooter() {
  return(
    <p style={{color:"red", backgroundColor:"blue"}}>THIS FOOTER</p>
  )
}

root.render(
  <div className='m-5'>
    <Header />
    <MainBody />
    <MainFooter />
  </div>
);

