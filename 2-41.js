// Write a function to find all ordered triples of distinct positive integers i, j, and k
// less than or equal to a given integer n that sum to a given integer s.

function unique_triples(n) {
  return flatmap(
    (i) =>
      flatmap(
        (j) => map((k) => list(i, j, k), enumerate_interval(1, j - 1)),
        enumerate_interval(1, i - 1)
      ),
    enumerate_interval(1, n)
  );
}

function unique_triples_sum_to_s(n, s) {
  return filter((seq) => accumulate(plus, 0, seq) === s, unique_triples(n));
}

unique_triples_sum_to_s(6, 8);
// -> [[4, [3, [1, null]]], [[5, [2, [1, null]]], null]]
