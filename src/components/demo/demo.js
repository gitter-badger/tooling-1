import $ from 'jquery';
import Please from 'pleasejs';

function changeColor() {
  const div = $('#color');
  div.css('background-color', Please.make_color());
}

function bindHandler() {
  const button = $('#button');
  button.on('click', changeColor);
}

const api = {
  changeColor,
  bindHandler
};

export default api;
