'use strict';

if (module.hot) {
  module.hot.accept();
}

if (process.env.NODE_ENV !== 'production') {
  require('./index.html');
}

require('./styles/primary.scss'); // The page is now styled
var Please = require('pleasejs');
var div = document.getElementById('color');
var button = document.getElementById('button');

function changeColor() {
  div.style.backgroundColor = Please.make_color();
}

button.addEventListener('click', changeColor);


// var printToday = require('./scripts/today.js');
// printToday();
//
// var sayHello = require('./scripts/sayhello.js');
// sayHello();
//
// require('./scripts/uicomponent/uicomponent.js');
