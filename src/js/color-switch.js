const refs = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('[data-action="start"]'),
  btnStop: document.querySelector('[data-action="stop"]'),
}

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];


refs.btnStart.addEventListener('click', onClickColorSwitchOn);

refs.btnStop.addEventListener('click', onClickColorSwitchOff);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const randomColor = colors[randomIntegerFromInterval(0, colors.length - 1)];

const timerId = setInterval(callback, delay, arg1, arg2, ...);


function onClickColorSwitchOn(evt) {
  console.log(evt.currentTarget)
  console.log(evt.target)

  // setInterval()
  refs.body.style.backgroundColor = randomColor;
};

function onClickColorSwitchOff() {
console.log('onClickColorSwitchOff')
};


console.log(randomColor)
function colorSwitch() {
  colors.forEach
}