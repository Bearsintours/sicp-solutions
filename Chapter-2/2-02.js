// Consider the problem of representing line segments in a plane. 
// Each segment is represented as a pair of points: a starting point and an ending point. 
// Declare a constructor make_segment and selectors start_segment and end_segment that define 
// the representation of segments in terms of points. 
// Furthermore, a point can be represented as a pair of numbers: the x coordinate and the y coordinate. 
// Accordingly, specify a constructor make_point and selectors x_point and y_point that define this representation. 
// Finally, using your selectors and constructors, declare a function midpoint_segment that takes a line segment as argument 
// and returns its midpoint (the point whose coordinates are the average of the coordinates of the endpoints):


function make_segment(start, end) {
  return pair(start, end);
}

function start_segment(s) {
  return head(s);
}

function end_segment(s) {
  return tail(s);
}

function midpoint_segment(s) {
  return avg_points(start_segment(s), end_segment(s));
}

function make_point(x, y) {
  return pair(x, y);
}

function x_point(pt) {
  return head(pt);
}

function y_point(pt) {
  return tail(pt);
}

function avg_points(pt1, pt2) {
  return make_point(
    avg(x_point(pt1), x_point(pt2)),
    avg(y_point(pt1), y_point(pt2))
  );
}

function avg(x, y) {
  return (x + y) / 2;
}
