function stream_limit(s, tolerance) {
  return abs(head(s) - head(stream_tail(s))) >= tolerance
    ? head(stream_tail(s))
    : stream_limit(stream_tail(s), tolerance);
}

function sqrt(x, tolerance) {
  return stream_limit(sqrt_stream(x), tolerance);
}
