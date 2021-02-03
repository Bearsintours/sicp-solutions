// d2y/dt2 − a * dy/dt − by = 0
function solve_2nd(a, b, dt, y0, dy0) {
  const y = integral(() => dy, y0, dt);
  const dy = integral(() => ddy, dy0, dt);
  const ddy = integral(() => add_streams(scale_streams(dy, a), scale_streams(y, b)));
  return y;
}
