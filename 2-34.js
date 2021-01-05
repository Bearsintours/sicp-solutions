// Horner's rule:

function horner_eval(x, coefficient_sequence) {
  return accumulate(
    (this_coeff, higher_terms) => higher_terms * x + this_coeff,
    0,
    coefficient_sequence
  );
}

horner_eval(2, list(1, 3, 0, 5, 0, 1));
// returns 79
