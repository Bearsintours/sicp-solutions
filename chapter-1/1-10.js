## Ackermann's function

function A(x,y) {
    return y === 0
           ? 0
           : x === 0
             ? 2 * y
             : y === 1
               ? 2
               : A(x - 1, A(x, y - 1));
}

# What are the values of the following expressions?

A(1,10)
# -> 1024

A(2,4)
# -> 65536

A(3,3)
# -> 65536


# Consider the following functions, where A is the function declared above, give concise mathematical definitions
# for the functions computed by the functions f, g, and h for positive integer values of 𝑛:

function f(n) {
    return A(0, n);
} # computes 2n

function g(n) {
    return A(1, n);
} # computes 2 to the power of n

function h(n) {
    return A(2, n);
} # computes 2 to the power of 2 * n

