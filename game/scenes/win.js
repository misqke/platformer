import k from "../kaboom.js";

k.scene("win", ({ time }) => {
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;

  k.add([
    k.text("You Win!", { size: game.scrollWidth >= 900 ? 50 : 30 }),
    k.pos(
      game.scrollWidth >= 900 ? k.width() * 0.5 - 110 : k.width() * 0.5 - 75,
      k.height() * 0.5 - 60
    ),
  ]);
  k.add([
    k.text(`${minutes}:${seconds < 10 ? "0" + seconds : seconds}`, {
      size: game.scrollWidth >= 900 ? 30 : 20,
    }),
    k.pos(
      game.scrollWidth >= 900 ? k.width() * 0.5 - 50 : k.width() * 0.5 - 18,
      k.height() * 0.5
    ),
  ]);
  k.add([
    k.text("press any key to play again.", {
      size: game.scrollWidth >= 900 ? 25 : 12,
    }),
    k.pos(
      game.scrollWidth >= 900 ? k.width() * 0.5 - 210 : k.width() * 0.5 - 110,
      k.height() * 0.5 + 40
    ),
  ]);

  k.onKeyPress(() => {
    k.go("game", { level: 0, time: 0 });
  });
});
