// Define a constructor make_center_percent that takes a center and a percentage tolerance and produces the desired interval. 
// You must also define a selector percent that produces the percentage tolerance for a given interval. 
// The center selector is the same as the one shown above


function make_percent_center(c, p) {
  const w = (c * p) / 100;
  return make_center_width(c, w);
}

function make_center_width(c, w) {
  return make_interval(c - w, c + w);
}

function width(i) {
  return (upper_bound(i) - lower_bound(i)) / 2;
}

function center(i) {
  return (lower_bound(i) + upper_bound(i)) / 2;
}

function percent(i) {
  (width(i) / center(i)) * 100;
}
