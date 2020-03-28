// Modify the timed_prime_test function of exercise 1.22 to use fast_is_prime (the Fermat method), 
// and test each of the 12 primes you found in that exercise

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
             ? square(expmod(base, exp / 2, m)) % m
             : (base * expmod(base, exp - 1, m)) % m;
}
          
function random(n) {
    return math_floor(math_random() * n);
}
          
function fermat_test(n) {
    function try_it(a) {
        return expmod(a, n, n) === a;
    }
    return try_it(1 + random(n - 1));
}
          
function fast_is_prime(n, times) {
    return times === 0
           ? true
           : fermat_test(n)
             ? fast_is_prime(n, times - 1)
             : false;
}

function timed_prime_test(n) {
    display(n);
    return start_prime_test(n, runtime());
}

function start_prime_test(n, start_time) {
    return fast_is_prime(n, 3)
           ? report_prime(runtime() - start_time)
           : true;
}

function report_prime(elapsed_time) {
    display(" *** ");
    display(elapsed_time);
}

timed_prime_test(1009);
// 0s
timed_prime_test(1013);
// 0s
timed_prime_test(1019);
// 0s
timed_prime_test(10007);
// 1s
timed_prime_test(10009);
// 1s
timed_prime_test(10037);
// 1s
timed_prime_test(100003);
// 1s
timed_prime_test(100019);
// 1s
timed_prime_test(100043);
// 1s
timed_prime_test(1000003);
// 1s
timed_prime_test(1000033);
// 1s
timed_prime_test(1000037);
// 1s





