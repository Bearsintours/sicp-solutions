//  Define the transformation flip_horiz, which flips painters horizontally, 
// and transformations that rotate painters counterclockwise by 180 degrees and 270 degrees.


function flip_horiz(painter) {
  return transform_painter(
    painter,
    make_vect(1.0, 0.0),
    make_vect(0.0, 0.0),
    make_vect(1.0, 1.0)
  );
}

function rotate_minus_180(painter) {
  return transform_painter(
    painter,
    make_vect(1.0, 1.0),
    make_vect(0.0, 1.0),
    make_vect(1.0, 0.0)
  );
}

function rotate_minus_270(painter) {
  return transform_painter(
    painter,
    make_vect(0.0, 1.0),
    make_vect(0.0, 0.0),
    make_vect(1.0, 1.0)
  );
}
