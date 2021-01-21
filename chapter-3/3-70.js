function weighted_merge(s1, s2, w) {
  if (is_null(s1)) {
    return s2;
  } else if (is_null(s2)) {
    return s1;
  } else {
    const s1head = head(s1);
    const s2head = head(s2);
    return w(s1head) <= w(s2head)
      ? pair(s1head, () => weighted_merge(stream_tail(s1), s2, w))
      : pair(s2head, () => weighted_merge(s1, stream_tail(s2), w));
  }
}

function weighted_pairs(s, t, w) {
  return pair(list(head(s), head(t)), () =>
    weighted_merge(
      stream_map((x) => list(head(s), x), stream_tail(t)),
      weighted_pairs(stream_tail(s), stream_tail(t), w),
      w
    )
  );
}

// a) stream of all pairs of positive integers (i,j) with i ≤ j ordered according to the sum i + j
function weight_sum(pair) {
  return head(pair) + head(tail(pair));
}

const pairs1 = weighted_pairs(integers, integers, weight_sum);

// b) stream of all pairs of positive integers (i,j) with i ≤ j,  where neither i nor j is divisible by 2, 3, or 5, and the pairs are ordered according to the sum 2i + 3j + 5ij
function weight_sum2(pair) {
  const i = head(pair);
  const j = head(tail(pair));
  return 2 * i + 3 * j + 5 * i * j;
}

function is_not_multiple2_3_5(pair) {
  function is_multiple(n) {
    return n % 2 === 0 || n % 3 === 0 || n % 5 === 0;
  }
  const i = head(pair);
  const j = head(tail(pair));
  return !is_multiple(i) && !is_multiple(j);
}

const pairs2 = stream_filter(is_not_multiple2_3_5, weighted_pairs(integers, integers, weight_sum2));
