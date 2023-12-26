import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

function MainHeader() {
  return(<h1>REACT COURSE</h1>)
}

function SubHeader() {
  return(<p>This will be an exciting course.</p>)
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
  return(<h1>Main body HERE</h1>)
}

function MainFooter() {
  return(<h1>Happy Coding!</h1>)
}

root.render(
  <div>
    <Header />
    <MainFooter />
  </div>
);

