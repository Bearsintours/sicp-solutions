// Describe how the difference of two intervals may be computed. 
// Define a corresponding subtraction function, called sub_interval.

function sub_interval(x, y) {
  return make_interval(
    lower_bound(x) - lower_bound(y),
    upper_bound(x) - upper_bound(y)
  );
}
