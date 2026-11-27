import test from 'node:test';
import assert from 'node:assert/strict';
import { calculate, parseNumber } from '../calculator.js';

test('four arithmetic operations', () => {
  assert.equal(calculate(12, 4, 'add'), 16);
  assert.equal(calculate(12, 4, 'subtract'), 8);
  assert.equal(calculate(12, 4, 'multiply'), 48);
  assert.equal(calculate(12, 4, 'divide'), 3);
});
test('zero, negative and decimal operands', () => {
  assert.equal(calculate(0, -3, 'multiply'), 0);
  assert.equal(calculate(-2.5, 1.5, 'add'), -1);
  assert.ok(Math.abs(calculate(0.1, 0.2, 'add') - 0.3) < 1e-12);
});
test('division by zero rejected', () => {
  assert.throws(() => calculate(2, 0, 'divide'), /ноль/);
});
test('invalid operands and overflow rejected', () => {
  for (const value of [NaN, Infinity, '3', undefined]) {
    assert.throws(() => calculate(value, 2, 'add'), /числа/);
  }
  assert.throws(() => calculate(Number.MAX_VALUE, 2, 'multiply'), /диапазон/);
});
test('unknown operation rejected', () => {
  assert.throws(() => calculate(2, 3, 'power'), /операция/);
});
test('user input accepts decimal comma and whitespace', () => {
  assert.equal(parseNumber(' 2,5 '), 2.5);
  assert.equal(parseNumber('-4.25'), -4.25);
  assert.equal(parseNumber('0'), 0);
});
test('empty, malformed and infinite input rejected', () => {
  for (const value of ['', '   ', 'abc', 'Infinity', '1,2,3', '2 5']) {
    assert.throws(() => parseNumber(value), /число/);
  }
});
