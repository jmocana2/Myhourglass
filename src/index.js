import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import News from './components/core/containers/News/'

console.log("Iniciando app...");

render(
  <Provider store={store}>
     <News />
  </Provider>,
  document.getElementById('app')
);

