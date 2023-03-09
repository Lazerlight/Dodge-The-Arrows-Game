import { moveBackground, setupBackground } from "./background.js";
import { movement } from "./player.js";
import { moveSpear, setupSpear } from "./spear.js";
import { moveWarp, setupWarp } from "./warp.js";

const playerEl = document.querySelector(".humanoid");
const spearEl = document.querySelector(".spear");
const messageEl = document.querySelector(".starting-message");

let lastTime;
let gameStarted = false;

setupBackground();
setupSpear();
setupWarp();

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
    moveWarp(delta);

    window.requestAnimationFrame(renderGame);
  }
}
window.requestAnimationFrame(renderGame);
