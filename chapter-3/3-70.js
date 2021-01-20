function weighted_pairs(s, t, w) {
  return pair(list(head(s), head(t)), () =>
    weighted_merge(
      stream_map((x) => list(head(s), x), stream_tail(t)),
      weighted_pairs(stream_tail(s), stream_tail(t), w),
      w
    )
  );
}

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

function integers_by_sum() {
  const weight = (pair) => head(pair) + head(stream_tail(pair));
  return weighted_pairs(integers, integers, weight);
}

