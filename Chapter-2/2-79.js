// Define a generic equality predicate is_equal that tests the equality of two numbers, and install it in the generic arithmetic package. 
// This operation should work for ordinary numbers, rational numbers, and complex numbers.

// javacript number package:
put("is_equal", list("javascript_number", "javascript_number"), (x, y) => x === y);

// complex number package:
put(
  "is_equal",
  list("complex", "complex"),
  (z1, z2) => real_part(z1) === real_part(z2) && imag_part(z1) === imag_part(z2)
);

// generic arithmetic package:
function is_equal(x, y) {
  return apply_generic("is_equal", list(x, y));
}

const n1 = make_javascript_number(5);
const n2 = make_javascript_number(5);
is_equal(n1, n2);
// true

const r = make_complex_from_real_imag(4, 3);
const p = make_complex_from_mag_ang(5, 0.5);
is_equal(r, p);
// false
