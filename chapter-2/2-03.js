// Implement 2 different representations for rectangles in a plane. (Hint: You may want to make use of exercise 2.2.) 
// Create functions that compute the perimeter and the area of a given rectangle. 
// Design your system with suitable abstraction barriers, so that the same perimeter and area functions will work using either representation


function make_segment(start, end){
  return pair(start, end)
}

function start_segment(s){
  return head(s)
}

function end_segment(s){
  return tail(s)
}

function make_point(x, y){
  return pair(x, y)
}

function x_point(pt){
  return head(pt)
}

function y_point(pt){
  return tail(pt)
}

function abs(x){
  return x > 0 ? x : -x;
}

function perimeter(rect){
  return (height(rect) + width(rect)) / 2;
}

function area(rect){
  return height(rect) * width(rect);
}

// First rectangle implementation

function make_rect(top_left, top_right, buttom_left, buttom_right){
  pair(
    pair(make_segment(top_left, buttom_left), make_segment(top_right, buttom_right)), 
    pair(make_segment(top_left, top_right), make_segment(bottom_left, buttom_right))
  )
}

function left_side(rect){
  return head(head(rect))
}

function right_side(rect){
  return head(tail(rect))
}

function top_side(rect){
  return tail(head(rect))
}

function bottom_side(rect){
  return tail(tail(rect))
}

function height(rect){
  return abs(y_point(start_segment(left_side(rect))) - y_point(end_segment(left_side(rect))))
}

function width(rect){
  return abs(x_point(start_segment(top_side(rect))) - x_point(end_segment(top_side(rect))))
}

function abs(x){
  return x > 0 ? x : -x;
}


// Second rectangle implementation

function make_rect(top_left, bottom_right){
  return pair(top_left, bottom_right)
}

function top_left(rect){
  return head(rect)
}

function bottom_right(rect){
  return tail(rect)
}

function bottom_left(rect){
  return make_point(x_point(top_left(rect)), y_point(bottom_right(rect)))
}

function top_right(rect){
  return make_point(x_point(bottom_right(rect)), y_point(top_left(rect)))
}

function height(rect){
  abs(y_point(head(rect)) - y_point(tail(rect)))
}

function width(rect){
  abs(x_point(head(rect)) - x_point(tail(rect)))
