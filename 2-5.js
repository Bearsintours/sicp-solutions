// Show that we can represent pairs of nonnegative integers using only numbers and arithmetic operations 
// if we represent the pair a and b as the integer that is the product 2a3b. 
// Give the corresponding definitions of the functions pair, head, and tail.


function pair(x, y) {
  return expt(2, x) * expt(3, y);
}

function expt(b, n) {
  return n === 0 ? 1 : b * expt(b, n - 1);
}

function head(x) {
  return x % 2 === 0 ? head(x / 2) + 1 : 0;
}

function tail(x) {
  return x % 3 === 0 ? tail(x / 3) + 1 : 0;
}
