import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/data';
import News from './components/core/containers/News/'
import dataNews from '../assets/json/news.json'

console.log("Iniciando app...");

const initialState = {
  dataNews: {
    ...dataNews
  },
  pressButton: false
}

const store = createStore(
  reducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
  <Provider store={store}>
     <News />
  </Provider>,
  document.getElementById('app')
);

