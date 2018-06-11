import createReduxProxy from 'react-cosmos-redux-proxy';
import configureStore from './src/configureStore';

const ReduxProxy = createReduxProxy({
  createStore: state => configureStore(state)
});

export default [
  ReduxProxy
  // ...other proxies
];