import ReactDOM from 'react-dom/client';
import "./CSS/style.css";
import Header from './Layout/header';
import Student from './student';
import MainBody from './mainbody';
import MainFooter from './Layout/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div style={{backgroundColor:'gray'}}>
    <Header />
    <MainBody />
    <div className='container-fluid row'>Students Enrolled</div>
    <Student experience={2} name='Kris Walley' />
    <Student experience={10} name='John Doe' />
    <MainFooter />
  </div>
);

