function make_cycle(x) {
  set_tail(last_pair(x), x);
  return x;
}

// using Floyd’s Tortoise and Hare algorithm
function is_cycle(x) {
  let hare = x;
  let turtoise = x;
  while (!is_null(head(hare)) && !is_null(tail(hare))) {
    hare = tail(tail(hare));
    turtoise = tail(turtoise);
    if (hare === turtoise) {
      return true;
    } else {
      continue;
    }
  }
  return false;
}

const z = make_cycle(list("a", "b", "c"));
is_cycle(z);
