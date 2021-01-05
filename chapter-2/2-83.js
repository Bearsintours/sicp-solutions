// Suppose you are designing a generic arithmetic system for dealing with the tower of types shown in figure 2.25: 
// integer, rational, real, complex. 
// For each type (except complex), design a function that raises objects of that type one level in the tower. 
// Show how to install a generic raise operation that will work for each type (except complex).


// javascript package:
put("raise", "javascript_number", (x) => make_rational(x, 1));

// rational package:
put("raise", "rational", (x) => make_real("div", numerator(x), denominator(x)));

// real package:
put("raise", "real", (x) => make_complex_from_real_imag(x, 0));

// generic arithmetic package:
function raise(x) {
  return apply_generic("raise", list(x));
}
