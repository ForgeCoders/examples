const valueElement = document.querySelector("#value");
const incrementButton = document.querySelector("#increment");
const decrementButton = document.querySelector("#decrement");
const resetButton = document.querySelector("#reset");

let value = 0;

function render() {
  valueElement.textContent = value;
}

incrementButton.addEventListener("click", () => {
  value += 1;
  render();
});

decrementButton.addEventListener("click", () => {
  value -= 1;
  render();
});

resetButton.addEventListener("click", () => {
  value = 0;
  render();
});

render();
