import k from "./kaboom.js";

function getPlayer() {
  const playerSpeed = 200;
  const playerJump = 450;

  const player = k.add([
    k.sprite("hero", { animSpeed: 1, anim: "idle" }),
    k.area({ width: 16, height: 32 }),
    k.body(),
    k.origin("bot"),
    k.pos(50, k.height() * 0.6),
  ]);

  console.log(player);

  // move left
  k.onKeyDown(["a", "left"], () => {
    player.move(-playerSpeed, 0);
  });
  k.onKeyPress(["a", "left"], () => {
    player.flipX(true);
    player.play("run");
  });

  // move right
  k.onKeyDown(["d", "right"], () => {
    player.move(playerSpeed, 0);
  });
  k.onKeyPress(["d", "right"], () => {
    player.flipX(false);
    player.play("run");
  });

  // stopping
  k.onKeyRelease(["a", "d", "left", "right"], () => {
    player.play("idle");
  });

  // jump
  k.onKeyPress(["w", "space", "up"], () => {
    if (player.isGrounded()) {
      player.play("jump");
      player.jump(playerJump);
    }
  });

  // landing
  player.onGround(() => {
    if (
      k.isKeyDown("a") ||
      k.isKeyDown("d") ||
      k.isKeyDown("left") ||
      k.isKeyDown("right")
    ) {
      player.play("run");
    } else {
      player.play("idle");
    }
  });

  // return player
  return player;
}

export default getPlayer;
