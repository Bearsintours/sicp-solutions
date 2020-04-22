// Implement a function for computing nth roots using fixed_point, average_damp, and the repeated function of exercise 1.43:

function nth_root(x, n) {
  return fixed_point(
    repeated(average_damp, Math.log2(n))((y) => x / expt(y, n - 1)),
    1.0
  );
}
