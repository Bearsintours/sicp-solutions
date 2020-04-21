// Write a function smooth that takes as input a function that computes f and returns a function that computes the smoothed f
// Show how to generate the n-fold smoothed function of any given function using smooth and repeated from exercise 1.43

const dx = 0.000000001;
function smooth(f) {
  return (x) => (f(x - dx) + f(x) + f(x + dx)) / 3;
}

function n_fold_smooth(f, n) {
  return repeated(smooth(f), n);
}

n_fold_smooth(square, 2)(5);
