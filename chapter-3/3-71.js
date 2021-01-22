function cube(n) {
  return n * n * n;
}

function weight_sum_cube(pair) {
  const i = head(pair);
  const j = head(tail(pair));
  return cube(i) + cube(j);
}

function get_consecutive_nums(s) {
  if (head(s) === head(stream_tail(s))) {
    return pair(head(s), get_consecutive_nums(stream_tail(s)));
  } else {
    return get_consecutive_nums(stream_tail(s));
  }
}

const pairs = weighted_pairs(integers, integers, weight_sum_cube);
const weights = stream_map(weight_sum_cube, pairs);
const ramanujan_nums = get_consecutive_nums(weights);

display_stream(ramanujan_nums);
// 1729, 4104, 13832 , 20683, 32832, 39312...
