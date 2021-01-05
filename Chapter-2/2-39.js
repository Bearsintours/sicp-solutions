// Write 2 reverse functions (exercise 2.18) in terms of fold_right and fold_left from exercise 2.38:

function fold_right(op, initial, sequence) {
  return is_null(sequence)
    ? initial
    : op(head(sequence), accumulate(op, initial, tail(sequence)));
}

function fold_left(op, initial, sequence) {
  function iter(result, rest) {
    return is_null(rest) ? result : iter(op(result, head(rest)), tail(rest));
  }
  return iter(initial, sequence);
}

function reverse_r(sequence) {
  return fold_right((x, y) => append(y, pair(x, null)), null, sequence);
}

function reverse_l(sequence) {
  return fold_left((x, y) => pair(y, x), null, sequence);
}

const sequence = list(1, 2, 3);

reverse_r(sequence);
// -> [3, [2, [1, null]]]

reverse_l(sequence);
// -> [3, [2, [1, null]]]
