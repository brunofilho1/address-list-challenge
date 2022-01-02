import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import ScreenRoutes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <ScreenRoutes />
  </React.StrictMode>,
  document.getElementById('root')
);
