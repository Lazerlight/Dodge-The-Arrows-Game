import { movement } from "./player.js";
import {} from "./spear.js";

const playerEl = document.querySelector(".humanoid");
const spearEl = document.querySelector(".spear");
const messageEl = document.querySelector(".starting-message");

let lastTime;

function renderGame(time) {
  // The main function that constantly updates the game and renders the elements
  if (lastTime == null) {
    window.requestAnimationFrame(renderGame);
    lastTime = time;
    return;
  }
  const delta = time - lastTime;
  lastTime = time;
  movement(delta);
  window.requestAnimationFrame(renderGame);
}

window.requestAnimationFrame(renderGame);
