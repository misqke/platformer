import k from "../kaboom.js";
import maps from "../maps.js";
import config from "../config.js";
import getPlayer from "../player.js";
import getSprites from "../sprites.js";

getSprites();

k.scene("game", ({ level, time }) => {
  // layers
  k.layers(["bg", "obj", "ui"], "obj");

  // timer
  const timer = k.add([
    k.text(time, { size: 40 }),
    k.layer("ui"),
    k.pos(0, 0),
    k.fixed(),
    {
      value: time,
    },
    "timer",
  ]);

  timer.onUpdate(() => {
    timer.value += k.dt();
    timer.text = Math.floor(timer.value);
  });

  //add player
  const player = getPlayer();

  // follow with camera
  k.onUpdate(() => {
    camPos(player.pos);
    if (player.pos.y >= 400) {
      if (level !== 0) {
        go("game", { level, time: timer.value });
      } else {
        go("game", { level: 0, time: 0 });
      }
    }
  });

  // add BG
  k.add([k.sprite("bg1"), k.layer("bg"), k.scale(4.05, 2.485)]);
  k.add([k.sprite("bg2"), k.layer("bg"), k.scale(4.05, 2.485)]);
  k.add([k.sprite("bg3"), k.layer("bg"), k.scale(4.05, 2.485)]);
  k.add([k.sprite("fg"), k.layer("bg"), k.scale(4.05, 2.485)]);

  // level
  k.addLevel(maps[level], config);
  // k.addLevel(maps[3], config);

  // go next level
  player.onCollide("exit", () => {
    if (level + 1 === maps.length) {
      k.go("win", { time: Math.floor(timer.value) });
    } else {
      k.go("game", { level: level + 1, time: timer.value });
    }
  });
});
