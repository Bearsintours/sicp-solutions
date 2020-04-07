// Write an analogous function called product that returns the product of the values of a function at points over a given range. 
// Show how to define factorial in terms of product
// Write a function that generates a recursive process and one that generates an iterative process. 

// iterative process
function product_iter(term, a, next, b) {
  function iter(a, result) {
    return a > b ? result : iter(next(a), result * term(a));
  }
  return iter(a, 1);
}

// recursive process
function product(term, a, next, b) {
  display(a);
  return a > b ? 1 : term(a) * product(term, next(a), next, b);
}
