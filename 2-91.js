 function div_poly(p1, p2) {
        return is_same_variable(variable(p1), variable(p2))
            ? make_poly(variable(p1), div_terms(term_list(p1), term_list(p2)))
            : error(list(p1, p2), "Polys not in same var -- div_poly");
    }
    
    function div_terms(L1, L2) {
        if (is_empty_termlist(L1)) {
            return list(the_empty_termlist, the_empty_termlist);
        } else {
            const t1 = first_term(L1);
            const t2 = first_term(L2);
            if (order(t2) > order(t1)) {
                return list(the_empty_termlist, L1);
            } else {
                const new_c = div(coeff(t1), coeff(t2));
                const new_o = order(t1) - order(t2);
                const rest_of_result = div_terms(sub_terms(L1, mul_term_by_all_terms(make_term(new_o, new_c), L2)), L2);
                return pair(adjoin_term(make_term(new_o, new_c), head(rest_of_result)), tail(rest_of_result));
            }
        }
    }
