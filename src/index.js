import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import AppBar from './components/views/containers/AppBar/'
import News from './components/core/containers/News';
import reducers from './reducers/data'
import { ThemeProvider } from 'styled-components';
import { Theme } from './config/themes';
import dataNews from '../assets/json/news.json';

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
  <ThemeProvider theme={Theme}>
    <Provider store={store}>
      <News />
    </Provider>
  </ThemeProvider>,  
  document.getElementById('app'));

