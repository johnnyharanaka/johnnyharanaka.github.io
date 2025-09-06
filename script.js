let hueVal = 0;
let speed = 3;

function changeColor() {
  hueVal = (hueVal + speed) % 360;
  document.documentElement.style.setProperty("--hue", hueVal);
  requestAnimationFrame(changeColor);
}

changeColor();
