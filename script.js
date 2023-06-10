'use strict';

const colour = [
  'aqua',
  'blue',
  'brown',
  'blueviolet',
  'chocolate',
  'cyan',
  'darkgreen',
  'darkorange',
  'gold',
  'orangered',
  'yellow',
  'gray',
  'indigo',
  'purple',
  'red',
];

let count = 0;

document.querySelector('.clr').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = colour[count];
  count < colour.length - 1 ? count++ : (count = 0);
});
