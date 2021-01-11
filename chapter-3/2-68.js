function pairs(s, t) {
  return interleave(
    stream_map((x) => list(head(s), x), t),
    pairs(stream_tail(s), stream_tail(t))
  );
}

// Louis's implementation results in an infinite loop:
// => `pairs(s, t)` will recursively call `pairs(stream_tail(s)), stream_tail(t))`
