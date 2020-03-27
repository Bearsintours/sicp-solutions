// 1-22 improved (only checks odd numbers) 

function square(x) {
    return x * x;
}
                
function smallest_divisor(n) {
    return find_divisor(n, 2);
}
function find_divisor(n, test_divisor) {
     return square(test_divisor) > n
            ? n
            : divides(test_divisor, n)
              ? test_divisor
              : find_divisor(n, next(test_divisor));
}
function divides(a, b) {
    return b % a === 0;
}

function next(n) {
    return n === 2 
        ? 3
        : n + 2;
}
          
function is_prime(n) {
    return n === smallest_divisor(n);
}
          
function timed_prime_test(n) {
    return start_prime_test(n, runtime());
}
function start_prime_test(n, start_time) {
    return is_prime(n)
           ? report_prime(n, runtime() - start_time)
           : false;
}
function report_prime(prime, elapsed_time) {
    display(" *** ");
    display(prime);
    display(elapsed_time);
    return true;
}

function search_for_primes(n) {
    is_even(n) 
        ? search_for_primes_iter(n+1, 0)
        : search_for_primes_iter(n, 0);
}

function is_even(n) {
    return n % 2 === 0;
}

function search_for_primes_iter(n, count) {
    return count === 3 
        ? true
        : timed_prime_test(n)
            ? search_for_primes_iter(n+2, count+1)
            : search_for_primes_iter(n+2, count);
}

search_for_primes(10000);  
// " *** "
// 4 1000003
// " *** "
// 2 1000033
// " *** "
// 4 1000037
