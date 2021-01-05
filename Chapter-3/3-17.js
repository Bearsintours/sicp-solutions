function count_pairs(x) {
  let counted = list();
  function count(x) {
    if (!is_pair(x) || !is_null(member(x, counted))) {
      return 0;
    } else {
      counted = append(counted, x);
      return count(head(x)) + count(tail(x)) + 1;
    }
  }
  return count(x);
}

const p = list(pair(1, 2), pair(2, 3), pair(4, 5));
count_pairs(p);
// 3
