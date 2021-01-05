// Test the primality of a number n with the Miller-Rabin test:

function square(x) {
    return x * x;
}
                
function is_even(n) {
    return n % 2 === 0;
}
          
function expmod(base, exp, m) {
    return exp === 0
           ? 1
           : is_even(exp)
             ? square(trivial_test(expmod(base, exp / 2, m), m)) % m
             : (base * expmod(base, exp - 1, m)) % m;
}
          
function random(n) {
    return math_floor(math_random() * n);
}

function trivial_test(num, n){
    return num === 1 || num === n - 1 
        ? num
        : square(num) % n === 1
            ? 0
            : num;
}
          
function miller_rabin_test(n) {
    function try_it(a) {
        return expmod(a, n-1, n) === 1;
    }
    return try_it(1 + random(n - 1));
}

miller_rabin_test(561);
// -> false
          
