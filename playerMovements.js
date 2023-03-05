import { getProperty, incProperty, setProperty } from "./CustomFunctions.js";

const SPEED = 0.1;
const playerEl = document.querySelector(".humanoid");
const PLAYER_VELOCITY = {
  x: 0,
};

window.addEventListener("keydown", (e) => {
  if (e.key == "ArrowRight") {
    PLAYER_VELOCITY.x = 1;
  } else if (e.key == "ArrowLeft") {
    PLAYER_VELOCITY.x = -1;
  }
});

window.addEventListener("keyup", function () {
  PLAYER_VELOCITY.x = 0;
});

export function movement(delta) {
  incProperty(playerEl, "--left", SPEED * delta * PLAYER_VELOCITY.x);
  if (getProperty(playerEl, "--left") <= 5) {
    setProperty(playerEl, "--left", 5);
  } else if (getProperty(playerEl, "--left") >= 95) {
    setProperty(playerEl, "--left", 95);
  }
}
