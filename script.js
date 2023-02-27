import { movement } from "./playerMovements.js";
const playerEl = document.querySelector(".humanoid");
const spearEl = document.querySelector(".spear");
const messageEl = document.querySelector(".starting-message");

let lastTime;
function renderGame(time) {
  if (lastTime == null) {
    window.requestAnimationFrame(renderGame);
    lastTime = time;
    return;
  }
  const delta = time - lastTime;
  lastTime = time;
  movement();
  window.requestAnimationFrame(renderGame);
}
window.requestAnimationFrame(renderGame);
