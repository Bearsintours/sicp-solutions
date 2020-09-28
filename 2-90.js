function install_sparse_polynomial_package() {
  // internal functions

  // representation of poly
  function make_poly(variable, term_list) {
    return pair(variable, term_list);
  }
  function variable(p) {
    return head(p);
  }
  function term_list(p) {
    return tail(p);
  }

  // representation of terms and term lists
  function adjoin_term(term, term_list) {
    return is_equal_to_zero(coeff(term)) ? term_list : pair(term, term_list);
  }
  const the_empty_termlist = null;
  function first_term(term_list) {
    return head(term_list);
  }
  function rest_terms(term_list) {
    return tail(term_list);
  }
  function is_empty_termlist(term_list) {
    return is_null(term_list);
  }
  function make_term(order, coeff) {
    return list(order, coeff);
  }
  function order(term) {
    return head(term);
  }
  function coeff(term) {
    return head(tail(term));
  }

  function add_poly(p1, p2) {
    return is_same_variable(variable(p1), variable(p2))
      ? make_poly(variable(p1), add_terms(term_list(p1), term_list(p2)))
      : error(list(p1, p2), "Polys not in same var -- add_poly");
  }

  function add_terms(L1, L2) {
    if (is_empty_termlist(L1)) {
      return L2;
    } else if (is_empty_termlist(L2)) {
      return L1;
    } else {
      const t1 = first_term(L1);
      const t2 = first_term(L2);
      if (order(t1) > order(t2)) {
        return adjoin_term(t1, add_terms(rest_terms(L1), L2));
      } else if (order(t1) < order(t2)) {
        return adjoin_term(t2, add_terms(L1, rest_terms(L2)));
      } else {
        return adjoin_term(make_term(order(t1), add(coeff(t1), coeff(t2))), add_terms(rest_terms(L1), rest_terms(L2)));
      }
    }
  }

  function mul_poly(p1, p2) {
    return is_same_variable(variable(p1), variable(p2))
      ? make_poly(variable(p1), mul_terms(term_list(p1), term_list(p2)))
      : error(list(p1, p2), "Polys not in same var -- mul_poly");
  }

  function mul_terms(L1, L2) {
    return is_empty_termlist(L1)
      ? the_empty_termlist
      : add_terms(mul_term_by_all_terms(first_term(L1), L2), mul_terms(rest_terms(L1), L2));
  }
  function mul_term_by_all_terms(t1, L) {
    if (is_empty_termlist(L)) {
      return the_empty_termlist;
    } else {
      const t2 = first_term(L);
      return adjoin_term(
        make_term(order(t1) + order(t2), mul(coeff(t1), coeff(t2))),
        mul_term_by_all_terms(t1, rest_terms(L))
      );
    }
  }

  // interface to rest of the system
  function tag(p) {
    return attach_tag("sparse_polynomial", p);
  }
  put("add", list("sparse_polynomial", "sparse_polynomial"), (p1, p2) => tag(add_poly(p1, p2)));
  put("mul", list("sparse_polynomial", "sparse_polynomial"), (p1, p2) => tag(mul_poly(p1, p2)));
  put("make", "sparse_polynomial", (variable, terms) => tag(make_poly(variable, terms)));
  return "done";
}
install_sparse_polynomial_package();

function install_dense_polynomial_package() {
  // internal functions

  // representation of poly
  function make_poly(variable, term_list) {
    return pair(variable, term_list);
  }
  function variable(p) {
    return head(p);
  }
  function term_list(p) {
    return tail(p);
  }

  // representation of terms and term lists
  function adjoin_term(term, term_list) {
    const exponent = order(term);
    const list_exponent = length(term_list) - 1;
    if (is_equal_to_zero(coeff(term))) {
      return term_list;
    } else if (exponent === list_exponent) {
      return pair(coeff(term), tail(term_list));
    } else if (exponent > list_exponent) {
      return adjoin_term(term, pair(make_javascript_number(0), term_list));
    } else {
      return pair(head(term_list), adjoin_term(term, tail(term_list)));
    }
  }
  const the_empty_termlist = null;
  function first_term(term_list) {
    return make_term(length(term_list) - 1, head(term_list));
  }
  function rest_terms(term_list) {
    return tail(term_list);
  }
  function is_empty_termlist(term_list) {
    return is_null(term_list);
  }
  function make_term(order, coeff) {
    return list(order, coeff);
  }
  function order(term) {
    return head(term);
  }
  function coeff(term) {
    return head(tail(term));
  }

  function add_poly(p1, p2) {
    return is_same_variable(variable(p1), variable(p2))
      ? make_poly(variable(p1), add_terms(term_list(p1), term_list(p2)))
      : error(list(p1, p2), "Polys not in same var -- add_poly");
  }

  function add_terms(L1, L2) {
    if (is_empty_termlist(L1)) {
      return L2;
    } else if (is_empty_termlist(L2)) {
      return L1;
    } else {
      const t1 = first_term(L1);
      const t2 = first_term(L2);
      if (order(t1) > order(t2)) {
        return adjoin_term(t1, add_terms(rest_terms(L1), L2));
      } else if (order(t1) < order(t2)) {
        return adjoin_term(t2, add_terms(L1, rest_terms(L2)));
      } else {
        return adjoin_term(make_term(order(t1), add(coeff(t1), coeff(t2))), add_terms(rest_terms(L1), rest_terms(L2)));
      }
    }
  }

  function mul_poly(p1, p2) {
    return is_same_variable(variable(p1), variable(p2))
      ? make_poly(variable(p1), mul_terms(term_list(p1), term_list(p2)))
      : error(list(p1, p2), "Polys not in same var -- mul_poly");
  }

  function mul_terms(L1, L2) {
    return is_empty_termlist(L1)
      ? the_empty_termlist
      : add_terms(mul_term_by_all_terms(first_term(L1), L2), mul_terms(rest_terms(L1), L2));
  }

  function mul_term_by_all_terms(t1, L) {
    if (is_empty_termlist(L)) {
      return the_empty_termlist;
    } else {
      const t2 = first_term(L);
      return adjoin_term(
        make_term(order(t1) + order(t2), mul(coeff(t1), coeff(t2))),
        mul_term_by_all_terms(t1, rest_terms(L))
      );
    }
  }

  // interface to rest of the system
  function tag(p) {
    return attach_tag("dense_polynomial", p);
  }
  put("add", list("dense_polynomial", "dense_polynomial"), (p1, p2) => tag(add_poly(p1, p2)));
  put("mul", list("dense_polynomial", "dense_polynomial"), (p1, p2) => tag(mul_poly(p1, p2)));
  put("make", "dense_polynomial", (variable, terms) => tag(make_poly(variable, terms)));
  return "done";
}
install_dense_polynomial_package();
