import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './Components/App';


const store = createStore(rootReducer, applyMiddleware(thunk));

console.log('store', store);
console.log('store.getState', store.getState());

store.subscribe(() => console.log("store.getSate()", store.getState()));


ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>, 
  document.getElementById('root')
);
