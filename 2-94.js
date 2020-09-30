
// Polynomial pacakge
function gcd_terms(a, b) {
    return is_empty_termlist(b)
       ? a
       : gcd_terms(b, remainder_terms(a, b));
  }
  
  function remainder_terms(L1, L2) {
    return div_terms(L1, L2);
  }
  
function gcd_poly(p1, p2) {
  return is_same_variable(variable(p1), variable(p2))
    ? make_poly(variable(p1), gcd_terms(term_list(p1), term_list(p2)))
    : error(list(p1, p2), "Polys not in the same var -- remainder_terms");
}

put("gcd", list("polynomial", "polynomial"), (p1, p2) => tag(gcd_poly(p1, p2)));


// Generic arithmetic package
function greatest_common_divisor(x, y) {
    return apply_generic("gcd", list(x, y));
}
