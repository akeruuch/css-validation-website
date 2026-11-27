"use strict";
import { calculate, parseNumber } from './calculator.js';
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#main-nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
  });
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    }
  });
}
document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.filter;
    let visible = 0;
    document.querySelectorAll(".project[data-category]").forEach((project) => {
      project.hidden = category !== "all" && project.dataset.category !== category;
      if (!project.hidden) visible += 1;
    });
    document.querySelectorAll("[data-filter]").forEach((item) => {
      item.setAttribute("aria-pressed", String(item === button));
    });
    document.querySelector("#filter-status").textContent = `Показано проектов: ${visible}`;
  });
});
document.querySelector("#year").textContent = String(new Date().getFullYear());

const calculatorForm = document.querySelector('#calculator-form');
if (calculatorForm) {
  const output = document.querySelector('#calculator-result');
  calculatorForm.addEventListener('submit', (event) => {
    event.preventDefault();
    try {
      const first = parseNumber(calculatorForm.elements.first.value);
      const second = parseNumber(calculatorForm.elements.second.value);
      const result = calculate(first, second, calculatorForm.elements.operation.value);
      output.textContent = `Результат: ${new Intl.NumberFormat('ru-RU', { maximumSignificantDigits: 12 }).format(result)}`;
      output.dataset.state = 'success';
    } catch (error) {
      output.textContent = error.message;
      output.dataset.state = 'error';
    }
  });
  calculatorForm.addEventListener('reset', () => {
    output.textContent = 'Введите два числа и выберите операцию.';
    delete output.dataset.state;
  });
}

// Intentional lecture 53 error
console.log(undefinedLecture53);
