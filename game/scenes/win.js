import k from "../kaboom.js";

k.scene("win", ({ time }) => {
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;

  k.add([
    k.text("You Win!", { size: 50 }),
    k.pos(k.width() * 0.5 - 100, k.height() * 0.5 - 40),
  ]);
  k.add([
    k.text(`${minutes}:${seconds}`, { size: 25 }),
    k.pos(k.width() * 0.5 - 30, k.height() * 0.5 + 20),
  ]);
  k.add([
    k.text("press any key to play again.", { size: 25 }),
    k.pos(k.width() * 0.5 - 200, k.height() * 0.5 + 60),
  ]);

  k.onKeyPress(() => {
    k.go("game", { level: 0, time: 0 });
  });
});
