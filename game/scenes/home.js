import k from "../kaboom.js";
const game = document.querySelector("#game");

k.scene("home", () => {
  k.add([
    k.text("platformer", { size: game.scrollWidth >= 900 ? 40 : 30 }),
    k.pos(
      game.scrollWidth >= 900 ? k.width() * 0.5 - 130 : k.width() * 0.5 - 85,
      k.height() * 0.25
    ),
  ]);
  k.add([
    k.text("click to start", { size: game.scrollWidth >= 900 ? 30 : 20 }),
    k.pos(
      game.scrollWidth >= 900 ? k.width() * 0.5 - 130 : k.width() * 0.5 - 87,
      k.height() * 0.25 + 65
    ),
  ]);
  game.scrollWidth >= 900 &&
    k.add([
      k.text(`"a"-"d"-"arrow keys" to move`, {
        size: 20,
      }),
      k.pos(50, k.height() - 125),
    ]);
  game.scrollWidth >= 900 &&
    k.add([
      k.text(`"w"-"space"-"up arrow" to jump`, {
        size: 20,
      }),
      k.pos(45, k.height() - 100),
    ]);

  k.onClick(() => {
    k.go("game", { level: 0, time: 0 });
  });
  k.onTouchStart(() => {
    k.go("game", { level: 0, time: 0 });
  });
});
