function stream_map_2(f, s1, s2) {
  return is_null(s1) || is_null(s2)
    ? null
    : pair(f(head(s1), head(s2)), () => stream_map_2(f, stream_tail(s1), stream_map(s2)));
}
