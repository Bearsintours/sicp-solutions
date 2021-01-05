function div_interval(x, y) {
  return upper_bound(y) !== 0 && lower_bound(y) !== 0
    ? mul_interval(x, make_interval(1 / upper_bound(y), 1 / lower_bound(y)))
    : Error("Division error: cannot divide by 0");
}
