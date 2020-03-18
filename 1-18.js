// Using the results of exercises 1.16 and 1.17, devise a function that generates an iterative process 
// for multiplying two integers in terms of adding, doubling, and halving and uses a logarithmic number of steps

function fast_times(a, b) {
  return a === 0 || b === 0 
    ? 0
    : fast_times_iter(a, b, 0);
}

function fast_times_iter(a, b, c) { 
  return b === 1
     ? c + a
     : is_even(b) 
        ? fast_times_iter(double(a), halve(b), c)
        : fast_times_iter(a, b - 1, c + a);
}

function double(n) {
  return n + n;
}

function halve(n) {
  return n / 2;
}

function is_even(n) {
  return n % 2 === 0;
}

fast_times(3, 6);
