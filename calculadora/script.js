const main = document.querySelector("#main");
const root = document.querySelector(":root");
const input = document.getElementById("input");
const resultInput = document.getElementById("result");

const allowedKeys = [
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  " ",
];

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", () => {
    const value = charKeyBtn.dataset.value
    input.value += value
  });
});

document.getElementById('clear').addEventListener("click", () => {
  input.value = ''
  input.focus()
})

input.addEventListener("keydown", (e) => {
  e.preventDefault();
  if (allowedKeys.includes(e.key)) {
    input.value += e.key;
    return;
  }
  if (e.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }
  if (e.key === "Enter") calculate();
});

document.getElementById('equal').addEventListener("click", calculate)

function calculate() {
  const result =  eval(input.value)
  resultInput.value = result
}