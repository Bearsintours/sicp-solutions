// Give an implementation of adjoin_set using the ordered representation

function adjoin_set(x, set) {
  return is_null(set)
    ? list(x)
    : x === head(set)
    ? set
    : x < head(set)
    ? pair(x, set)
    : pair(head(set), adjoin_set(x, tail(set)));
}

adjoin_set(10, list(7,8,9,11));
// [7, [8, [9, [10, [11, null]]]]]
