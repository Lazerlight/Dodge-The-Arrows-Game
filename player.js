const FRAME_DELAY = 30;

import { getProperty, incProperty, setProperty } from "./CustomFunctions.js";
import { SPEED } from "./spear.js";

const playerEl = document.querySelector(".humanoid");
const PLAYER_VELOCITY = {
  x: 0,
};

window.addEventListener("keydown", (e) => {
  // Checking if certain key is pressed and changes the direction of movement if the statement is correct
  if (e.key == "ArrowRight" || e.key == "d") {
    PLAYER_VELOCITY.x = 1;
  } else if (e.key == "ArrowLeft" || e.key == "a") {
    PLAYER_VELOCITY.x = -1;
  }
});

window.addEventListener("keyup", function () {
  // Checking if the key is no longer held down and stops the direction of movement
  PLAYER_VELOCITY.x = 0;
});

let currentFrame = 1;
let currentFrameDelay = 0;
export function movement(delta) {
  // A function that handles the range of motion and velocity of the main player element
  incProperty(playerEl, "--left", SPEED * delta * PLAYER_VELOCITY.x);

  if (getProperty(playerEl, "--left") <= 3) {
    setProperty(playerEl, "--left", 3);
  } else if (getProperty(playerEl, "--left") >= 97) {
    setProperty(playerEl, "--left", 97);
  }
  currentFrameDelay += 1;
  if (currentFrame === 1 && currentFrameDelay >= FRAME_DELAY) {
    currentFrame = 2;
    playerEl.style.backgroundImage = `url(./Graphics/SpaceShip${currentFrame}.png)`;
    currentFrameDelay = 0;
  } else if (currentFrameDelay >= FRAME_DELAY) {
    currentFrame = 1;
    playerEl.style.backgroundImage = `url(./Graphics/SpaceShip${currentFrame}.png)`;
    currentFrameDelay = 0;
  }
}
