import { colors } from './colors.js';

const refs = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('[data-action="start"]'),
  btnStop: document.querySelector('[data-action="stop"]'),
};

let intervalId = null;

refs.btnStart.addEventListener('click', onClickColorSwitchOn);

refs.btnStop.addEventListener('click', onClickColorSwitchOff);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function onClickColorSwitchOn() {
  intervalId = setInterval(() => {
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
  }, 1000)

  refs.btnStart.disabled = true;

};

function onClickColorSwitchOff() {
  clearInterval(intervalId)

  refs.btnStart.disabled = false;
};
