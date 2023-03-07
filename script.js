import { moveBackground, setupBackground } from "./background.js";
import { movement } from "./player.js";
import { moveSpear, setupSpear } from "./spear.js";

const playerEl = document.querySelector(".humanoid");
const spearEl = document.querySelector(".spear");
const messageEl = document.querySelector(".starting-message");

let lastTime;
let gameStarted = false;

window.addEventListener(
  "keypress",
  function () {
    gameStarted = true;
    messageEl.classList.add("hidden");
    renderGame();
  },
  { once: true }
);

function renderGame(time) {
  // The main function that constantly updates the game and renders the elements
  if (gameStarted) {
    if (lastTime == null) {
      window.requestAnimationFrame(renderGame);
      lastTime = time;
      return;
    }
    const delta = time - lastTime;
    lastTime = time;
    movement(delta);
    moveBackground(delta);
    moveSpear(delta);

    window.requestAnimationFrame(renderGame);
  }
}

setupBackground();
setupSpear();
window.requestAnimationFrame(renderGame);

// TODO - Add a warp portal that sets the speed of ground to 0.3 and increments the score faster then stops after 3 seconds with possibility of spawn every 30 - 90 seconds
