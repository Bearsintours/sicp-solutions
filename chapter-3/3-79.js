// d2y/dt2 = f(dy/dt,y)
function solve_2nd(f, y0, dy0, dt) {
  const y = integral(() => dy, y0, dt);
  const dy = integral(() => ddy, dy0, dt);
  const ddy = stream_map_2(f, dy, y);
  return y;
}
