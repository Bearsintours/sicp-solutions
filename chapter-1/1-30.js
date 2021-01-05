// Rewrite sum() so that the sum is performed iteratively

function sum_integers(a, b) {
  return sum(identity, a, inc, b);
}

function sum(term, a, next, b) {
  function iter(a, result) {
    return a > b ? result : iter(next(a), result + term(a));
  }
  return iter(a, 0);
}

sum(1, 5);
