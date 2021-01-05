// Design a multiplication function that uses a logarithmic number of steps:

function fast_times(a,b) {
  return b === 1
  ? a 
  : a === 0 || b === 0 
    ? 0
    : is_even(b) 
      ? double(fast_times(a, halve(b)))
      : a + fast_times(a, b - 1);
}

function double(n) {
  return n * 2;
}

function halve(n) {
  return n / 2;
}

function is_even(n) {
    return n % 2 === 0;
}

fast_times(3, 6);
