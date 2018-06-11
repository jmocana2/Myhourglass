import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import AppBar from './components/views/containers/AppBar/'

console.log("Iniciando app...");

render(<AppBar />,  document.getElementById('app'));

