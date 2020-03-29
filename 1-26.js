// Compare this implementation of expmod with the one from exercise 1-24:
// Why does it transform the Θ(logn) process into a Θ(n) process?

function is_even(n) {
    return n % 2 === 0;
}
          
function expmod(base, exp, m) {
    return exp === 0
        ? 1
        : is_even(exp)
            ? expmod(base, exp / 2, m) * expmod(base, exp / 2, m) % m
            : base * expmod(base, exp - 1, m) % m;
}

expmod(5, 27, 27);

// expmod(base, exp/2, m) is computed twice when n is even, which eliminates the benefit of halving the exponent.
// This implementation generates a tree recursion, so execution time grows exponentially with the 
// depth of the tree which is log(n) 
// => 0(n)
          
