function ripple_carry_adder(list_a, list_b, list_s, c_in) {
  function recur(list_a, list_b, list_s, c_in) {
    if (is_null(list_a)) {
      set_signal(c_in, 0);
    } else {
      const c_out = make_wire();
      full_adder(head(list_a), head(list_b), c_in, head(list_s), c_out);
      recur(tail(list_a), tail(list_b), tail(list_s), c_out);
    }
  }
  recur(list_a, list_b, list_s, c_in);
  return "ok";
}

const a = list(make_wire(), make_wire(), make_wire());
const b = list(make_wire(), make_wire(), make_wire());
const s = list(make_wire(), make_wire(), make_wire());
const c = make_wire();

ripple_carry_adder(a, b, s, c);
