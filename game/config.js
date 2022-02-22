import k from "./kaboom.js";

const config = {
  width: 16,
  height: 16,
  "=": () => [k.sprite("tiles", { frame: 1 }), k.area(), k.solid()],
  "-": () => [k.sprite("tiles", { frame: 12 }), k.area(), k.solid()],
  "(": () => [k.sprite("tiles", { frame: 14 }), k.area(), k.solid()],
  ")": () => [k.sprite("tiles", { frame: 14 }), k.area(), k.solid()],
  "<": () => [k.sprite("tiles", { frame: 37 }), k.area(), k.solid()],
  ">": () => [k.sprite("tiles", { frame: 40 }), k.area(), k.solid()],
  "*": () => [
    k.sprite("door"),
    k.scale(3),
    k.layer("bg"),
    k.origin("center"),
    k.area({ width: 1 }),
    "exit",
  ],
};

export default config;
