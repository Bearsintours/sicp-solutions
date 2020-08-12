# Define selectors upper_bound and lower_bound

function make_interval(x, y) {
  return pair(x, y);
}

function lower_bound(pair) {
  return math_min(head(pair), tail(pair));
}

function upper_bound(pair) {
  return math_max(head(pair), tail(pair));
}
