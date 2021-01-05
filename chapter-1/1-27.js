// Demonstrate that the Carmichael numbers really do fool the Fermat test. 
// That is, write a function that takes an integer n and tests whether a is congruent to a modulo n for every a < n, 
// and try your function on the given Carmichael numbers.
// (There are 255 Carmichael numbers below 100,000,000. The smallest few are 561, 1105, 1729, 2465, 2821, and 6601)

function square(x) {
  return x * x;
}

function is_even(n) {
  return n % 2 === 0;
}

function expmod(base, exp, m) {
  return exp === 0
    ? 1
    : is_even(exp)
      ? square(expmod(base, exp / 2, m)) % m
      : (base * expmod(base, exp - 1, m)) % m;
}

function fermat_test(n, a) {
  return expmod(a, n, n) === a;
}

function is_prime(n, a) {
  return a === 1 ? true : fermat_test(n, a) ? is_prime(n, a - 1) : false;
}

function is_prime_carmichael(n) {
  return is_prime(n, n - 1);
}

is_prime_carmichael(561);
// => true

is_prime_carmichael(1105);
// => true
