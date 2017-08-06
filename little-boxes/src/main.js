import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import style from './styles/app.scss'

import Wrapper from './components/Wrapper';
import Picture from './components/Picture';
import List from './components/List';
import Numbers from './components/Numbers';

let date = (new Date).toString()
let random = parseInt(Math.random() * 100)

let paragraph = 'lorem ipsum some words . . .'
let list = ['Asteroids', 'Comets', 'Moon', 'Planets', 'Stars', 'Sun'];
let insert = `Today's date is ${date} and ${random} is a random number.`
let src = 'https://s3.amazonaws.com/horizon-production/images/react-clever-ees.png'

ReactDOM.render(
  <div>
    <Wrapper
      header='I Am The Wrapper'
      body={paragraph}
     />
    <Picture
      header='Look at This Picture'
      body={src}
     />
    <List
      header='Here Is a List'
      body={list}
     />
    <Numbers
      header="Today's Date and Random Number"
      body={insert}
     />
  </div>,
  document.getElementById('app')
);
