function square(n) {
  return n * n;
}

function weight_sum_square(pair) {
  const i = head(pair);
  const j = head(tail(pair));
  return square(i) + square(j);
}

function get_3_consecutive_nums(s) {
  const first = head(s);
  const second = head(stream_tail(s));
  const third = head(stream_tail(stream_tail(s)));
  if (first === second && second === third) {
    return pair(head(s), get_3_consecutive_nums(stream_tail(s)));
  } else {
    return get_3_consecutive_nums(stream_tail(s));
  }
}

const pairs = weighted_pairs(integers, integers, weight_sum_square);
const weights = stream_map(weight_sum_square, pairs);

const nums = get_3_consecutive_nums(weights);
display_stream(nums);
// 325, 425, 650, 725, 845, 850...
