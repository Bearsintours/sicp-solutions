// Show that sum and product (exercise 1.31) are both special cases of a still more general notion called accumulate 
// that combines a collection of terms, using some general accumulation function:
// accumulate(combiner, null_value, term, a, next, b);
// Write accumulate and show how sum and product can both be declared as simple calls to accumulate. 
// Write a function that generates a recursive process and one that generates an iterative process.


// recursive process
function accumulate(combiner, null_value, term, a, next, b) {
  return a > b
    ? null_value
    : combiner(
        term(a),
        accumulate(combiner, null_value, term, next(a), next, b)
      );
}

// iterative process
function accumulate_iter(combiner, null_value, term, a, next, b) {
  function iter(a, result) {
    return a > b ? result : iter(next(a), combiner(result, term(a)));
  }
  return iter(a, null_value);
}

function inc(n) {
  return n + 1;
}

function identity(x) {
  return x;
}

function product_combiner(a, b) {
  return a * b;
}

function sum_combiner(a, b) {
  return a + b;
}

function sum_integers(a, b) {
  return accumulate(sum_combiner, 0, identity, a, inc, b);
}

function factorial(a, b) {
  return accumulate(product_combiner, 1, identity, a, inc, b);
}

sum_integers(1, 4);
factorial(2, 5);
