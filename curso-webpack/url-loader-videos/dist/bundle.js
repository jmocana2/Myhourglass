/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var _messaje = __webpack_require__(2);

var _atpPremium = __webpack_require__(3);

var _atpPremium2 = _interopRequireDefault(_atpPremium);

var _SampleVideo_1280x720_2mb = __webpack_require__(4);

var _SampleVideo_1280x720_2mb2 = _interopRequireDefault(_SampleVideo_1280x720_2mb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.write(_messaje.firstMessaje);
var img = document.createElement('img');
img.setAttribute('src', _atpPremium2.default);
document.body.appendChild(img);
var video = document.createElement('video');
video.setAttribute('src', _SampleVideo_1280x720_2mb2.default);
video.setAttribute('autoplay', true);
video.setAttribute('controls', true);
video.setAttribute('width', '480');

document.body.appendChild(video);
console.log("Hola Mundo desde la carpeta css-style-loader");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  firstMessaje: 'Esto es un mensaje importado'
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "videos/SampleVideo_1280x720_2mb.6cff9004d995b5c929ce90e391100996.mp4";

/***/ })
/******/ ]);