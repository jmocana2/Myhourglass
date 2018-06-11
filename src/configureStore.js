import React from 'react';
import { createStore } from 'redux';
import reducers from './reducers/data';
import dataNews from '../assets/json/news.json'

const initialState = {
  dataNews: {
    ...dataNews
  },
  pressButton: false
}

export default function configureStore(){
  return createStore(
    reducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );  
}