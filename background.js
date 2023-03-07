import { getProperty, incProperty, setProperty } from "./CustomFunctions.js";

const backgroundEls = document.querySelectorAll(".background");

const SPEED = 0.05;

export function setupBackground() {
  setProperty(backgroundEls[0], "--top", 0);
  setProperty(backgroundEls[1], "--top", -100);
}

export function moveBackground(delta) {
  backgroundEls.forEach((e) => {
    incProperty(e, "--top", SPEED * delta);

    if (getProperty(e, "--top") >= 100) {
      incProperty(e, "--top", -200);
    }
  });
}
