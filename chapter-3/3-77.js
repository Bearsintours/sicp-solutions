function integral(delayed_integrand, initial_value, dt) {
  const integrand = delayed_integrand();
  return pair(
    initial_value,
    is_null(integrand) ? null : integral(() => stream_tail(integrand), dt * head(integrand) + initial_value, dt)
  );
}

// dy/dt = f(y)
function solve(f, y0, dt) {
  const y = integral(() => dy, y0, dt);
  const dy = stream_map(f, y);
  return y;
}
