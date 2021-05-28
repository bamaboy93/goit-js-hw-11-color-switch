const refs = {
  body: document.querySelector("body"),
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),

};

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const timer = {
  switchColors: null,
  
  start() {
    

    refs.start.setAttribute("disabled", true);
    this.switchColors = setInterval(() => {
      const min = 0;
      const max = colors.length - 1;
      const color = randomIntegerFromInterval(min, max);
      refs.body.style.backgroundColor = colors[color];

    }, 1000);
  },
  stop() {
    clearInterval(this.switchColors);
    refs.start.removeAttribute("disabled", true);
  },

};

refs.start.addEventListener("click", () => {
  timer.start()
});
refs.stop.addEventListener("click", () => {
  timer.stop()
});

