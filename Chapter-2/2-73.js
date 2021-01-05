// a) We don't assimilate the predicates is_number and is_variable into the data-directed dispatch because there is no obvious keys.

// b) Functions for derivatives of sums and products, and the auxiliary code required to install them

// c) Differentiation rule for exponents (exercise 2.56) added to install_deriv_package() 


function is_variable(x) {
  return is_string(x);
}

function is_same_variable(v1, v2) {
  return is_variable(v1) && is_variable(v2) && v1 === v2;
}

function deriv(exp, variable) {
  return is_number(exp)
    ? 0
    : is_variable(exp)
    ? is_same_variable(exp, variable)
      ? 1
      : 0
    : get("deriv", operator(exp))(operands(exp), variable);
}

function operator(exp) {
  return head(exp);
}

function operands(exp) {
  return tail(exp);
}

function install_deriv_package() {
  function deriv_sum(exp, variable) {
    function addend(s) {
      return head(tail(s));
    }

    function augend(s) {
      return head(tail(tail(s)));
    }
    return make_sum(deriv(addend(exp), variable), deriv(augend(exp), variable));
  }

  function deriv_product(exp, variable) {
    function multiplier(s) {
      return head(tail(s));
    }
    function multiplicand(s) {
      return head(tail(tail(s)));
    }
    return make_sum(
      make_product(deriv_product(multiplier(exp), deriv(multiplicand(exp), variable))),
      make_product(deriv(multiplier(exp), variable), multiplicand(exp))
    );
  }

  function deriv_exponent(exp, variable) {
    function base(e) {
      return head(tail(e));
    }
    function exponent(e) {
      return head(tail(tail(e)));
    }
    function make_exp(base, exp) {
      return number_equal(exp, 0) ? 1 : number_equal(exp, 1) ? base : list("**", base, exp);
    }

    return make_product(
      make_product(exponent(exp), make_exp(base(exp), exponent(exp) - 1)),
      deriv(base(exp), variable)
    );
  }

  function install() {
    put("deriv", "+", deriv_sum);
    put("deriv", "x", deriv_product);
    put("deriv", "**", deriv_exponent);
  }

  return install();
}

install_deriv_package();

deriv(list("*", list("*", "x", "y"), list("+", "x", 4)), "x");


// d) We would need to change the order of the arguments in the install() funtion:
function install() {
    put("+", "deriv", deriv_sum);
    put("x", "deriv", deriv_product);
    put("**", "deriv", deriv_exponent);
  }


