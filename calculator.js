export function parseNumber(value) {
  const text = String(value).trim().replace(',', '.');
  const number = Number(text);
  if (!text || !Number.isFinite(number)) {
    throw new Error('Введите корректное число.');
  }
  return number;
}

export function calculate(first, second, operation) {
  if (!Number.isFinite(first) || !Number.isFinite(second)) {
    throw new Error('Оба значения должны быть конечными числами.');
  }
  let result;
  switch (operation) {
    case 'add': result = first + second; break;
    case 'subtract': result = first - second; break;
    case 'multiply': result = first * second; break;
    case 'divide':
      if (second === 0) throw new Error('Делить на ноль нельзя.');
      result = first / second;
      break;
    default: throw new Error('Неизвестная операция.');
  }
  if (!Number.isFinite(result)) throw new Error('Результат выходит за допустимый диапазон.');
  return Object.is(result, -0) ? 0 : result;
}
