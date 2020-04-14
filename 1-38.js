// Write a program that uses your cont_frac function from exercise 1.37 to approximate e, based on Euler's expansion:

function cont_frac(n, d, k) {
  function finite_frac(i) {
    return i > k ? 0 : n(i) / (d(i) + finite_frac(i + 1));
  }
  return finite_frac(1);
}

function euler(n) {
  return n === 2
    ? 2
    : (n + 1) % 3 === 0
    ? euler(n - 3) + euler(n - 2) + euler(n - 1)
    : 1;
}

const euler_cont_frac = 2 + cont_frac(i => 1, i => euler(i), 6)

