// Define a generic predicate is_equal_to_zero that tests if its argument is zero, and install it in the generic arithmetic package. 
// This operation should work for ordinary numbers, rational numbers, and complex numbers.

// generic arithmetic package
function is_equal_to_zero(x) {
  return apply_generic("is_equal_to_zero", list(x));
}

// javacript number package
put("is_equal_to_zero", list("javascript_number"), (x) => x === 0);

// complex number package
put("is_equal_to_zero", list("complex"), (z) => real_part(z) === 0 && imag_part(z) === 0);


const n = make_javascript_number(4);
is_equal_to_zero(n);
// false

const z = make_complex_from_real_imag(4, 3);
is_equal_to_zero(z);
// false
