// Design a function that evolves an iterative exponentiation process that uses successive squaring 
// and uses a logarithmic number of steps to compute the exponential of a given number

function expt(b,n) {
    return expt_iter(b, n, 1);
}

function expt_iter(b, n, a) {
    return n === 0
      ? a 
      : is_even(n)
        ? expt_iter(b * b, n / 2, a)
        : expt_iter(b, n - 1, a * b);
}

function is_even(n) {
    return n % 2 === 0;
}

expt(2, 9);
