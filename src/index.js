import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const surname = 'Shah'

ReactDOM.render(
  <App surname={surname} />,
  document.getElementById('root')
);
