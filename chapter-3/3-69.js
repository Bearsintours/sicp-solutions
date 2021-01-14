function triples(i, j, k) {
  return pair(list(head(i), head(j), head(k)), () =>
    interleave(
      stream_map((x) => list(head(i), head(j), x), stream_tail(k)),
      triples(stream_tail(i), stream_tail(j), stream_tail(k))
    )
  );
}

function square(n) {
    return n * n;
}

function is_pythagorean(x1, x2, x3) {
    return square(x1) + square(x2) === square(x3);
}

const list_of_triples = triples(integers, integers, integers);
const pythagorean_triples = stream_filter(list => is_pythagorean(head(list), head(tail(list)), head(tail(tail(list)))), list_of_triples);
