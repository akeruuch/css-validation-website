export function calculate(a, b, operation) {
  if (operation === "add") return a + b;
  if (operation === "subtract") return a - b;
  if (operation === "multiply") return a * b;

  if (operation === "divide") {
    if (b === 0) return "На ноль делить нельзя";
    return a / b;
  }

  return "Выберите операцию";
}
