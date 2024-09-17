function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input[type="number"]');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('div#boxes');

btnCreate.addEventListener('click', () => {
  const amount = input.value;
  
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }

  input.value = '';
});

function createBoxes(amount) {
  boxes.innerHTML = '';
  const boxItems = [];
  let size = 30;
  for (let i = 1; i <= amount; i += 1) {
    let nextBox = document.createElement('div');    
    nextBox.style.width = `${size}px`;
    nextBox.style.height = `${size}px`;
    nextBox.style.backgroundColor = getRandomHexColor();
    boxItems.push(nextBox);

    size += 10;
  }
  boxes.append(...boxItems);
}

const removeBoxes = () => boxes.innerHTML = '';

btnDestroy.addEventListener('click', removeBoxes);