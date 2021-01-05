# Define one and two directly (not in terms of zero and add_1):

const zero = (f) => (x) => x;
function add_1(n) {
  return (f) => (x) => f(n(f)(x));
}

const one = (f) => (x) => f(x);

const two = (f) => x + f(f(x));
