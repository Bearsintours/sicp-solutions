// Define the stack operation for painters


function stack(painter1, painter2) {
  const split_point = make_vect(0.0, 0.5);
  const paint_top = transform_painter(
    painter1,
    make_vect(split_point),
    make_vect(1.0, 0.5),
    make_vect(0.0, 1.0)
  );
  const paint_bottom = transform_painter(
    painter2,
    make_vect(0.0, 0.0),
    make_vect(1.0, 0.0),
    split_point
  );
  return (frame) => {
    paint_top(frame);
    paint_bottom(frame);
  };
}
