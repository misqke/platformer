import k from "./kaboom.js";
const game = document.querySelector("#game");

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

  // move functions

  const keyDown = {
    left: false,
    right: false,
  };

  const moveRight = () => {
    player.move(playerSpeed, 0);
  };
  const moveLeft = () => {
    player.move(-playerSpeed, 0);
  };
  const jump = () => {
    if (player.isGrounded()) {
      player.play("jump");
      player.jump(playerJump);
    }
  };

  // handle move left buttons
  k.onKeyDown(["a", "left"], () => {
    keyDown.left = true;
  });
  k.onKeyRelease(["a", "left"], () => {
    keyDown.left = false;
  });
  k.onKeyPress(["a", "left"], () => {
    player.flipX(true);
    player.play("run");
  });

  // handle move right buttons
  k.onKeyDown(["d", "right"], () => {
    keyDown.right = true;
  });
  k.onKeyRelease(["d", "right"], () => {
    keyDown.right = false;
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
    jump();
  });

  // landing
  player.onGround(() => {
    if (keyDown.right === true || keyDown.left === true) {
      player.play("run");
    } else {
      player.play("idle");
    }
  });

  // mobile buttons
  if (k.isTouch()) {
    const leftButton = k.add([
      k.sprite("leftControl"),
      k.layer("ui"),
      k.pos(10, game.scrollHeight < 400 ? k.height() - 90 : k.height() - 120),
      k.fixed(),
      k.scale(0.75),
      k.area({ width: 80, height: 80 }),
      k.opacity(0.5),
    ]);
    const rightButton = k.add([
      k.sprite("rightControl"),
      k.layer("ui"),
      k.pos(80, game.scrollHeight < 400 ? k.height() - 90 : k.height() - 120),
      k.fixed(),
      k.scale(0.75),
      k.area({ width: 80, height: 80 }),
      k.opacity(0.5),
    ]);
    const jumpButton = k.add([
      k.sprite("jumpControl"),
      k.layer("ui"),
      k.pos(
        k.width() - 70,
        game.scrollHeight < 400 ? k.height() - 90 : k.height() - 120
      ),
      k.fixed(),
      k.scale(0.75),
      k.area({ width: 80, height: 80 }),
      k.opacity(0.5),
    ]);

    k.onTouchStart((pos, touch) => {
      if (leftButton.hasPoint(touch)) {
        keyDown.left = true;
        keyDown.right = false;
        player.flipX(true);
        player.play("run");
        leftButton.opacity = 1;
      } else if (rightButton.hasPoint(touch)) {
        keyDown.right = true;
        keyDown.left = false;
        player.flipX(false);
        player.play("run");
        rightButton.opacity = 1;
      } else if (jumpButton.hasPoint(touch)) {
        jump();
      }
    });

    k.onTouchEnd((pos, touch) => {
      if (jumpButton.hasPoint(touch)) {
        return;
      } else if (leftButton.hasPoint(touch)) {
        keyDown.left = false;
        leftButton.opacity = 0.5;
      } else if (rightButton.hasPoint(touch)) {
        keyDown.right = false;
        rightButton.opacity = 0.5;
      }
    });
  }

  player.onUpdate(() => {
    if (keyDown.left === true) {
      moveLeft();
    } else if (keyDown.right === true) {
      moveRight();
    } else {
      if (player.isGrounded()) {
        player.play("idle");
      }
    }
  });

  // return player
  return player;
}

export default getPlayer;
