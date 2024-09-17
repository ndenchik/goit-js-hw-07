function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const bodyColor = document.querySelector(".color");

const handleClick = () => {
  const newColor = getRandomHexColor();

  document.body.style.backgroundColor = getRandomHexColor();
  bodyColor.textContent = newColor;
}

button.addEventListener("click", handleClick);