// Define a function unique_pairs that, given an integer n, generates the sequence of pairs (i,j) with 1≤j<i≤n. 
// Use unique_pairs to simplify the definition of prime_sum_pairs

function flatmap(f, seq) {
  return accumulate(append, null, map(f, seq));
}

function is_prime_sum(pair) {
  return is_prime(head(pair) + head(tail(pair)));
}

function make_pair_sum(pair) {
  return list(head(pair), head(tail(pair)), head(pair) + head(tail(pair)));
}

function enumerate_interval(low, high) {
  return low > high ? null : pair(low, enumerate_interval(low + 1, high));
}

function unique_pairs(n) {
  return flatmap(
    (i) => map((j) => list(i, j), enumerate_interval(1, i - 1)),
    enumerate_interval(1, n)
  );
}

function prime_sum_pairs(n) {
  return map(make_pair_sum, filter(is_prime_sum, unique_pairs(n)));
}

prime_sum_pairs(6);
// -> [[2, [1, [3, null]]], [[3, [2, [5, null]]], [[4, [1, [5, null]]], [[4, [3, [7, null]]],
// [[5, [2, [7, null]]], [[6, [1, [7, null]]], [[6, [5, [11, null]]], null]]] ] ] ] ]
