// Implement the constructor make_from_mag_ang in message-passing style. This function should be analogous to the make_from_real_imag function

function make_from_mag_ang(r, a) {
  function dispatch(op) {
    return op === "real_part"
      ? r * math_cos(a)
      : op === "imag_part"
      ? r * math_sin(a)
      : op === "magnitude"
      ? r
      : op === "angle"
      ? a
      : error(op, "Unknown op -- make_from_real_imag");
  }
  return dispatch;
}
