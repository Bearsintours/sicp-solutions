// Show how to extend the basic differentiator to handle more kinds of expressions. 
// For instance, implement the differentiation rule for exponentiation


function deriv(exp, variable) {
  return is_number(exp)
    ? 0
    : is_variable(exp)
    ? is_same_variable(exp, variable)
      ? 1
      : 0
    : is_sum(exp)
    ? make_sum(deriv(addend(exp), variable), deriv(augend(exp), variable))
    : is_product(exp)
    ? make_sum(
        make_product(multiplier(exp), deriv(multiplicand(exp), variable)),
        make_product(deriv(multiplier(exp), variable), multiplicand(exp))
      )
    : is_exp(exp)
    ? make_product(
        make_product(base(exp), make_exp(base(exp)), exponant(exp) - 1),
        deriv(base(exp), variable)
      )
    : Error("unknown expression type in deriv", exp);
}

function is_exp(x) {
  return is_pair(x) && head(x) === "**";
}

function base(x) {
  return head(tail(x));
}

function exponant(x) {
  return head(tail(tail(x)));
}

function make_exp(base, exp) {
  return number_equal(exp, 0)
    ? 1
    : number_equal(exp, 1)
    ? base
    : list("**", base, exp);
}
