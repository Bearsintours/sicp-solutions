function integers_starting_from(n) {
  return pair(n, () => integers_starting_from(n + 1));
}
const integers = integers_starting_from(1);

function partial_sums(s) {
    return pair(head(s), () => add_streams(partial_sums(s), stream_tail(s)));
}
const sums = partial_sums(integers);

eval_stream(sums, 5); // [1, [3, [6, [10, [15, null]]]]]
