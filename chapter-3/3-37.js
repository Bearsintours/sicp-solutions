function cplus(x, y) {
  const z = make_connector();
  adder(x, y, z);
  return z;
}

function cminus(x, y) {
  const z = make_connector();
  substracter(x, y, z);
  return z;
}

function cmul(x, y) {
  const z = make_connector();
  multiplier(x, y, z);
  return z;
}

function cdiv(x, y) {
  const z = make_connector();
  multiplier(y, z, x);
  return z;
}

function cv(x) {
  const z = make_connector();
  constant(x, z);
  return z;
}

function celsius_fahrenheit_converter(x) {
  return cplus(cmul(cdiv(cv(9), cv(5)), x), cv(32));
}

const C = make_connector();
const F = celsius_fahrenheit_converter(C);
probe("F", F);
set_value(C, 30, "user");
// "Probe: F = 86"
