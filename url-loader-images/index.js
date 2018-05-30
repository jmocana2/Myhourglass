import './estilos.css'
import { firstMessaje } from './messaje.js'
import atpPremium from './atp-premium.jpg'

document.write(firstMessaje);
const img = document.createElement('img');
img.setAttribute('src', atpPremium);
document.body.appendChild(img);
console.log("Hola Mundo desde la carpeta css-style-loader");