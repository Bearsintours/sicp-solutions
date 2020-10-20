function last_pair(x) {
  return is_null(tail(x)) ? x : last_pair(tail(x));
}

function make_cycle(x) {
  set_tail(last_pair(x), x);
  return x;
}

function is_cycle(x) {
  let visited = list();
  function check(x) {
    if (!is_pair(x)) {
      return false;
    } else if (!is_null(member(x, visited))) {
      return true;
    } else {
      visited = pair(x, visited);
      return check(tail(x));
    }
  }
  return check(x);
}

const z = make_cycle(list("a", "b", "c"));
is_cycle(z);
// true
