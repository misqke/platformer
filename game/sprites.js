import k from "./kaboom.js";

function getSprites() {
  // player
  k.loadSprite("hero", "sprites/rogue_knight.png", {
    sliceX: 10,
    sliceY: 12,
    anims: {
      idle: {
        from: 0,
        to: 3,
        loop: true,
      },
      run: {
        from: 10,
        to: 15,
        loop: true,
      },
      jump: {
        from: 20,
        to: 29,
      },
    },
  });

  // tiles
  k.loadSprite("tiles", "sprites/tileset.png", {
    sliceX: 11,
    sliceY: 5,
  });

  // backgrounds
  k.loadSprite("bg1", "sprites/bg/Bg_1.png");
  k.loadSprite("bg2", "sprites/bg/Bg_2.png");
  k.loadSprite("bg3", "sprites/bg/Bg_3.png");
  k.loadSprite("fg", "sprites/bg/Fg_1.png");
  k.loadSprite("door", "sprites/doorway.png");

  // mobile controls
  k.loadSprite("leftControl", "sprites/controls/left.png");
  k.loadSprite("rightControl", "sprites/controls/right.png");
  k.loadSprite("jumpControl", "sprites/controls/jump.png");
}

export default getSprites;
