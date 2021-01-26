function integral(integrand, initial_value, dt) {
  const integ = pair(initial_value, () => add_streams(scale_stream(integrand, dt), integ));
  return integ;
}

function RC(R, C, dt) {
  const output = (i, v0) => add_streams(scale_stream(integral(i, v0, dt), 1 / C), scale_stream(i, R));
  return output;
}

const RC1 = RC(5, 1, 0.5);
