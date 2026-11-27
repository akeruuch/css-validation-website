import { calculate } from "./calculator.js";

const first = document.getElementById("first");
const second = document.getElementById("second");
const operation = document.getElementById("operation");
const result = document.getElementById("result");

document.getElementById("calculate").addEventListener("click", function () {
  if (first.value === "" || second.value === "") {
    result.textContent = "Введите два числа";
    return;
  }

  const answer = calculate(Number(first.value), Number(second.value), operation.value);
  result.textContent = "Результат: " + answer;
});

document.getElementById("clear").addEventListener("click", function () {
  first.value = "";
  second.value = "";
  result.textContent = "Здесь будет результат";
});

// Intentional lecture 53 error
console.log(undefinedLecture53);
