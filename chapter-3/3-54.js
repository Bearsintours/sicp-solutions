function mul_streams(s1, s2) {
  return stream_map_2((x1, x2) => x1 * x2, s1, s1);
}

function integers_starting_from(n) {
  return pair(n, () => integers_starting_from(n + 1));
}

const integers = integers_starting_from(2);

const factorials = pair(1, () => mul_streams(integers, factorials));
