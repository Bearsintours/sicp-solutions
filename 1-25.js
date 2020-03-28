// Re-write expmod() with fast-expt and compare with expmod used in 1-24
// We can print n everytime square(n) is called to compare computations

function square(x) {
    display(n);
    return x * x;
}
                
function is_even(n) {
    return n % 2 === 0;
}

// expmod with fast_expt
function expmod_with_fast_exp(base, exp, m) {
    return fast_expt(base, exp) % m;
}

function fast_expt(b, n) {
    return n === 0
       ? 1
       : is_even(n)
         ? square(fast_expt(b, n / 2))
         : b * fast_expt(b, n - 1);
}

// expmod from exercise 1-24
function expmod(base, exp, m) {
    return exp === 0
       ? 1
       : is_even(exp)
         ? square(expmod(base, exp / 2, m)) % m
         : (base * expmod(base, exp - 1, m)) % m;
}


// expmod_with_fast_exp() works for small enough values ...
expmod(4, 29, 29);
// 4
// 16
// 256
// 65536
// 4294967296
// -> 31

// ... but not for bigger values:
expmod(102, 1003, 1003)
// 102
// 1061208
// 114868566764928
// 1.3458683383241297e30
// 1.847588815785421e62
// 3.4135844322153745e124
// 1.1885609849380425e251
// Infinity
// Infinity
// -> NaN

// same test with expmod() (the one used in exercise 1-24):
expmod(102, 1003, 1003)
// 102
// 34
// 561
// 527
// 629
// 459
// 187
// 867
// 952
// -> 510
