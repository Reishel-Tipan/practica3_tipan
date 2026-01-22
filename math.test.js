import { factorial, fibonacci } from './math.js';

test('factorial(5) debe ser 120', () => {
  expect(factorial(5)).toBe(100);
});


test('factorial(0) debe ser 1', () => {
  expect(factorial(0)).toBe(1);
});

test('fibonacci(7) debe ser 13', () => {
  expect(fibonacci(7)).toBe(13);
});

test('fibonacci(0) debe ser 0', () => {
  expect(fibonacci(0)).toBe(0);
});
