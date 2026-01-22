export function factorial(n) {
  if (n < 0) {
    return null;
  }
  if (n === 0) {
    return 1;
  }

  let result = 1;
  for (let i = 1; i <= n; i += 1) {
    result *= i;
  }
  return result;
}

export function fibonacci(n) {
  if (n < 0) {
    return null;
  }
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i += 1) {
    const next = a + b;
    a = b;
    b = next;
  }
  return b;
}
