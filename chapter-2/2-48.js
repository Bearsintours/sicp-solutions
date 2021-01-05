// Use your vector representation from exercise 2.46 to define a representation for segments with a constructor 
// make_segment and selectors start_segment and end_segment:


function make_segment(start_vect, end_vect) {
  return pair(start_vect, end_vect);
}

function start_segment(segment) {
  return head(segment);
}

function end_segment(segment) {
  return tail(segment);
}
