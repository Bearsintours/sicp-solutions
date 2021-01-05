function or_gate(s1, s2, output) {
  function add_action_function() {
    if (s1 === s2) {
      return and_gate(s1, s2, output);
    } else {
      const s3 = make_wire();
      and_gate(s1, s2, s3);
      inverter(s3, output);
    }
  }
  add_action(s1, add_action_function);
  add_action(s2, add_action_function);
  return "ok";
}
