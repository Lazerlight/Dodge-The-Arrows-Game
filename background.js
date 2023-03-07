import { getProperty, incProperty, setProperty } from "./CustomFunctions.js";

const background_1 = document.querySelector(".background-1");
const background_2 = document.querySelector(".background-2");

const SPEED = 0.05;

export function moveBackground(delta) {
  let background_1_POSITION = getProperty(background_1, "--top");
  let background_2_POSITION = getProperty(background_2, "--top");

  incProperty(background_1, "--top", SPEED * delta);
  incProperty(background_2, "--top", SPEED * delta);

  if (background_1_POSITION > 100) {
    setProperty(background_1, "--top", background_2_POSITION - 98);
  } else if (background_2_POSITION > 100) {
    setProperty(background_2, "--top", background_1_POSITION - 98);
  }
}
