function triples(i, j, k) {
  return pair(list(head(i), head(j), head(k)), () =>
    interleave(
      stream_map((x) => list(head(i), head(j), x), stream_tail(k)),
      triples(stream_tail(i), stream_tail(j), stream_tail(k))
    )
  );
}
