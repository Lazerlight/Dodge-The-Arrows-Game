const SPEED = 1;
const playerEl = document.querySelector(".humanoid");
const PLAYER_POSITION = {
  x: 50,
};
const PLAYER_VELOCITY = {
  x: 0,
};

window.addEventListener("keydown", (e) => {
  if (e.key == "ArrowUp") {
    PLAYER_VELOCITY.y = -1;
  } else if (e.key == "ArrowDown") {
    PLAYER_VELOCITY.y = 1;
  } else if (e.key == "ArrowRight") {
    PLAYER_VELOCITY.x = 1;
  } else if (e.key == "ArrowLeft") {
    PLAYER_VELOCITY.x = -1;
  }
});
window.addEventListener("keyup", function () {
  PLAYER_VELOCITY.x = 0;
});
// Improve the code by using the CSS variables...
export function movement() {
  PLAYER_POSITION.x += PLAYER_VELOCITY.x * SPEED;
  playerEl.style.left = PLAYER_POSITION.x + "%";
  playerEl.style.transform = "translateX(-50%)";
}
