function ln2_summands(n) {
  return pair(1 / n, () => stream_map((x) => -x, ln2_summands(n + 1)));
}

const ln2_stream = partial_sums(ln2_summands(1));
