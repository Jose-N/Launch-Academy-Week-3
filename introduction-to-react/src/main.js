import './main.scss'
import React from 'react';
import ReactDOM from 'react-dom';

let headerElement = (
  <h1 onClick={ (event) => {alert('Roar!')} }>
    I am a react element hear me roar
  </h1>
); 

ReactDOM.render(
  headerElement,
  document.getElementById('app')
);
