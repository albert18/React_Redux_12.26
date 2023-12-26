import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

function MainHeader() {
  return(<h1 className="text-primary">REACT COURSE</h1>)
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
  <div>
    <Header />
    <MainBody />
    <MainFooter />
  </div>
);

