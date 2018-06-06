import React, { Component } from 'react';
import { render } from 'react-dom';
import Teacher from './components/core/containers/Teacher/'

console.log("Iniciando app...");

render(<Teacher name="Jose" twitter="jmocana2" />, document.getElementById('app'));

