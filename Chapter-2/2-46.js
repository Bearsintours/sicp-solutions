// A two-dimensional vector v running from the origin to a point can be represented as a pair consisting of an x-coordinate and a y-coordinate. 
// Implement a data abstraction for vectors by giving a constructor make_vect and corresponding selectors xcor_vect and ycor_vect. 
// In terms of your selectors and constructor, implement functions add_vect, sub_vect, and scale_vect that perform the operations 
// vector addition, vector subtraction, and multiplying a vector by a scalar:


function make_vect(x, y) {
  return pair(x, y);
}

function xcor_vect(vect) {
  return head(vect);
}

function ycor_vect(vect) {
  return tail(vect);
}

function add_vect(vect1, vect2) {
  return make_vect(
    xcor_vect(vect1) + xcor_vect(vect2),
    ycor_vect(vect1) + ycor_vect(vect2)
  );
}

function sub_vect(vect1, vect2) {
  return make_vect(
    xcor_vect(vect1) - xcor_vect(vect2),
    ycor_vect(vect1) - ycor_vect(vect2)
  );
}

function scale_vect(vect, scale) {
  return make_vect(scale * xcor_vect(vect), scale * ycor_vect(vect));
}
