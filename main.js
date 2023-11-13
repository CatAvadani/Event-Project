window.addEventListener("DOMContentLoaded", main);

function main() {
  document.addEventListener("click", placeCircle);
  document.querySelector("h1").addEventListener("mouseover", setRandomColor);
  document.querySelector("h2").addEventListener("mouseover", setRandomColor);
}

function placeCircle(event) {
  console.log(event.x, event.y);
  const circle = document.createElement("div");
  circle.className = "circle";
  circle.style.left = event.clientX + "px";
  circle.style.top = event.clientY + "px";

  document.body.append(circle);
  // remove the circle after a while
  setTimeout(() => {
    document.body.removeChild(circle);
  }, 1000);
}

function setRandomColor(event) {
  event.currentTarget.style.color = getRandomColor();
  console.log(event.currentTarget);
}

function getRandomColor() {
  const chars = "0123456789abcdef";
  const r = chars[Math.floor(Math.random() * 16)];
  const g = chars[Math.floor(Math.random() * 16)];
  const b = chars[Math.floor(Math.random() * 16)];
  return "#" + r + g + b;
}
