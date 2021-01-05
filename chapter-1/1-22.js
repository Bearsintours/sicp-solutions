// Write a function search_for_primes that checks the primality of consecutive odd integers in a specified range.
// Use your function to find the three smallest primes larger than 1000; larger than 10,000; larger than 100,000; larger than 1,000,000.

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
    : find_divisor(n, test_divisor + 1);
}

function divides(a, b) {
  return b % a === 0;
}

function is_prime(n) {
  return n === smallest_divisor(n);
}

function timed_prime_test(n) {
  return start_prime_test(n, runtime());
}
function start_prime_test(n, start_time) {
  return is_prime(n) ? report_prime(n, runtime() - start_time) : false;
}

function report_prime(prime, elapsed_time) {
  display(" *** ");
  display(prime);
  display(elapsed_time);
  return true;
}

function search_for_primes(n) {
  is_even(n) ? search_for_primes_iter(n + 1, 0) : search_for_primes_iter(n, 0);
}

function is_even(n) {
  return n % 2 === 0;
}

function search_for_primes_iter(n, count) {
  return count === 3
    ? true
    : timed_prime_test(n)
    ? search_for_primes_iter(n + 2, count + 1)
    : search_for_primes_iter(n + 2, count);
}

search_for_primes(1000);
// " *** "
// 1009
// 0
// " *** "
// 1013
// 0
// " *** "
// 1019
// 0

search_for_primes(10000); 
// " *** "
// 10007
// 0
// (" *** ")
// 10009
// 0
// (" *** ")
// 10037
// 0

search_for_primes(100000);  
// " *** "
// 100003
// 0
// (" *** ")
// 100019
// 1
// (" *** ")
// 100043
// 1

search_for_primes(1000000);         
// " *** "
// 1000003
// 2
// (" *** ")
// 1000033
// 2
// (" *** ")
// 1000037
// 4



