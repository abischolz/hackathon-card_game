import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './client/store/index';
// import { Router } from 'react-router-dom'
import Home from './client/components/Home';

//card variables
const suits = ['spades', 'diamonds', 'clubs', 'hearts'];
const values = [
  'A',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
];

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('app')
);
