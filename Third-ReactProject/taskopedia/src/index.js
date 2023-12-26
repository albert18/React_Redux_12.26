import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

function MainBody() {
  return(
    <div>Hello World!</div>
  )
};

root.render(
  <div>
    <MainBody />
  </div>
);

