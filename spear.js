import { getProperty, incProperty, setProperty } from "./CustomFunctions.js";

const SPEED = 0.1;
const mainEl = document.querySelector("main");
let spearEls = document.querySelectorAll(".spear");

export function setupSpear(delta) {
  //  Creating and setting up the position of the spear element
  spearEls.forEach((e) => {
    e.style.left = getRandomPositionLeft() + "%";
    setProperty(e, "--top", getRandomPositionTop());
  });
}

export function moveSpear(delta) {
  // Handling the spear movement and position
  spearEls.forEach((e) => {
    incProperty(e, "--top", SPEED * delta);
  });
}

function getRandomPositionLeft() {
  // Returning a random number between 1 - 100
  return Math.floor(Math.random() * 100 + 1);
}
function getRandomPositionTop() {
  // Returning a random number between -10 - -50
  return Math.floor(Math.random() * -300 - 10);
}
