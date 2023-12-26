import ReactDOM from 'react-dom/client';
import "./CSS/style.css"

const root = ReactDOM.createRoot(document.getElementById('root'));

function MainHeader() {
  return(<h1 className="heading1">REACT COURSE</h1>)
}

const subHeaderStyle = {
  color: "red",
  backgroundColor:"yellow",
}

function SubHeader() {
  return(<p style={subHeaderStyle}>This will be an exciting course.</p>)
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
  return(
  <div>
    <h1>Main body HERE</h1>
  </div>
  )
}

function MainFooter() {
  return(
    <p style={{color:"red", backgroundColor:"blue"}}>Happy Coding!</p>
  )
}

root.render(
  <div className='m-5'>
    <Header />
    <MainBody />
    <MainFooter />
  </div>
);

