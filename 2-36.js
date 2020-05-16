function accumulate(op, initial, sequence) {
  return is_null(sequence)
    ? initial
    : op(head(sequence), accumulate(op, initial, tail(sequence)));
}

function accumulate_n(op, init, seqs) {
  return is_null(head(seqs))
    ? null
    : pair(
        accumulate(
          op,
          init,
          map((seq) => head(seq), seqs)
        ),
        accumulate_n(
          op,
          init,
          map((seq) => tail(seq), seqs)
        )
      );
}

function plus(x, y) {
  return x + y;
}

const seq = list(list(1, 2, 3), list(4, 5, 6), list(7, 8, 9), list(10, 11, 12));

accumulate_n(plus, 0, seq);
// [22, [26, [30, null]]]
