const v = list("a", "b", "c");

function mystery(x) {
  function loop(x, y) {
    if (is_null(x)) {
      return y;
    } else {
      const temp = tail(x);
      set_tail(x, y);
      return loop(temp, x);
    }
  }
  return loop(x, null);
}

mystery(v);
// ["c", ["b", ["a", null]]]
