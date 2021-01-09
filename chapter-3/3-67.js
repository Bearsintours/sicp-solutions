function pairs(s, t) {
  return pair(list(head(s), head(t)), () =>
    interleave(
      stream_map((x) => list(head(s), x), stream_tail(t)),
      interleave(
        stream_map((x) => list(head(t), x), stream_tail(s)),
        pairs(stream_tail(s), stream_tail(t))
      )
    )
  );
}
