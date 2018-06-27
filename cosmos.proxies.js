import PropTypes from 'prop-types';
import createReduxProxy from 'react-cosmos-redux-proxy';
import createRouterProxy from 'react-cosmos-router-proxy';
import createWrapperProxy from "react-cosmos-wrapper-proxy";
import configureStore from './src/configureStore';
import { ThemeProvider } from 'styled-components';
import { Theme } from './src/config/themes';

const ThemeProxy = createWrapperProxy({
  // Required
  component: ThemeProvider, // The wrapper component
  fixtureKey: "tp", // Key
  // Optional
  // Props to pass to the wrapper component
  // Note: can be passed from the fixture as well
  props: { 
    theme: Theme
  }  
});

const ReduxProxy = createReduxProxy({
  createStore: state => configureStore(state)
});

export default [
  createRouterProxy(),
  ReduxProxy,
  ThemeProxy
  // ...other proxies
];