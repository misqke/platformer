const game = document.querySelector("#game");

const k = kaboom({
  debug: true,
  root: game,
  fullscreen: true,
  inspectColor: [255, 255, 255],
  scale: game.scrollWidth < 900 ? 1.5 : 2,
  background: [0, 0, 0, 1],
});

export default k;
