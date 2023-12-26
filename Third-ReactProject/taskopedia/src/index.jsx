import ReactDOM from 'react-dom/client';
import "./CSS/style.css";
import Header from './Layout/header';
import MainBody from './mainbody';
import MainFooter from './Layout/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div style={{backgroundColor:'gray'}}>
    <Header />
    <MainBody />
    <MainFooter />
  </div>
);

