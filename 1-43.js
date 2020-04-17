// Write a function that takes as inputs a function that computes f and a positive integer n 
// and returns the function that computes the nth repeated application of f. 
// Your function should be able to be used as follows: repeated(square, 2)(5);

function repeated(f, n) {
  return n === 0 ? (x) => f(x) : compose(f, repeated(f, n - 1));
}
