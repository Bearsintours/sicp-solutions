// Re-write expmod() with fast-expt

function square(x) {
    return x * x;
}
                
function is_even(n) {
    return n % 2 === 0;
}
          
function fast_expt(b, n) {
    return n === 0
           ? 1
           : is_even(n)
             ? square(fast_expt(b, n / 2))
             : b * fast_expt(b, n - 1);
}
          
function expmod(base, exp, m) {
    return fast_expt(base, exp) % m;
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

timed_prime_test(22);

          
