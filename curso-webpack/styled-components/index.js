import React, { Component } from 'react';
import { render } from 'react-dom';
import Teachers from './components/Teachers';

import './estilos.css'
import { firstMessaje } from './messaje.js'
import atpPremium from './atp-premium.jpg'
import video2mb from './video/SampleVideo_1280x720_2mb.mp4'
import data from './json/teachers.json';

render(<Teachers data={data} />, document.getElementById('Profesores'));

console.log(data);

data.teachers.forEach((teacher) => {
  const element = document.createElement('p');
  element.textContent = teacher.name;
  document.body.appendChild(element);
})

document.write(firstMessaje);
const img = document.createElement('img');
img.setAttribute('src', atpPremium);
document.body.appendChild(img);
const video = document.createElement('video');
video.setAttribute('src', video2mb);
video.setAttribute('autoplay', true);
video.setAttribute('controls', true);
video.setAttribute('width', '480');

document.body.appendChild(video);
console.log("Hola Mundo desde la carpeta css-style-loader");