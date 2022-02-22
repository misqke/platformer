import k from "../kaboom.js";

k.scene("home", () => {
  k.add([
    k.text("platformer", { size: 45 }),
    k.pos(k.width() * 0.5 - 120, k.height() * 0.25),
  ]);
  k.add([
    k.text("press any key to continue", { size: 20 }),
    k.pos(k.width() * 0.5 - 145, k.height() * 0.25 + 45),
  ]);
  k.add([
    k.text(`"a"-"d"-"arrow keys" to move`, { size: 20 }),
    k.pos(10, k.height() - 75),
  ]);
  k.add([
    k.text(`"w"-"space"-"up arrow" to jump`, { size: 20 }),
    k.pos(10, k.height() - 50),
  ]);

  k.onKeyPress(() => {
    k.go("game", { level: 0, time: 0 });
  });
});
