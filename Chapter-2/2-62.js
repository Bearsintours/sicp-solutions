// Give a Θ(n) implementation of union_set for sets represented as ordered lists

function union_set(set1, set2) {
  if (is_null(set1)) {
    return set2;
  } else if (is_null(set2)) {
    return set1;
  } else {
    const x1 = head(set1);
    const x2 = head(set2);
    return x1 === x2
      ? pair(x2, union_set(tail(set1), tail(set2)))
      : x1 < x2
      ? pair(x1, union_set(tail(set1), set2))
      : pair(x2, union_set(set1, tail(set2)));
  }
}

adjoin_set(10, list(7,8,9,11));
// [7, [8, [9, [10, [11, null]]]]]
