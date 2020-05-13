// Fill in the missing expressions to complete the following definitions of some basic list-manipulation operations as accumulations:

function accumulate(op, initial, sequence) {
  return is_null(sequence)
    ? initial
    : op(head(sequence), accumulate(op, initial, tail(sequence)));
}

function map(f, sequence) {
  return accumulate((x, y) => pair(f(x), y), null, sequence);
}

function append(seq1, seq2) {
  return accumulate(pair, seq2, seq1);
}

function length(sequence) {
  return accumulate((x, y) => 1 + y, 0, sequence);
}
