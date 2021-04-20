import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './Routes/Routers';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>,
  document.getElementById('root')
);