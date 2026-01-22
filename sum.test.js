import { sum } from './sum.js';

test('La suma de 2 + 3 debe ser 5', () => {
  expect(sum(2, 3)).toBe(5);
});
