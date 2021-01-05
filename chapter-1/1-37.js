// Declare a function cont_frac such that evaluating cont_frac(n, d, k) computes the value of the k-term finite continued fraction

// recursive process
function cont_frac(n, d, k) {
  function finite_frac(i) {
    return i > k ? 0 : n(i) / (d(i) + finite_frac(i + 1));
  }
  return finite_frac(1);
}

// iterative process
function iter_cont_frac(n, d, k) {
  function finite_frac(i, result) {
    return i == 0 ? result : finite_frac(i - 1, n(i) / (d(i) + result));
  }
  return finite_frac(k, 0);
}
