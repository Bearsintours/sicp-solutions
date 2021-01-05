// Write accumulate function with filter:

function filtered_accumulate(combiner, filter, null_value, term, a, next, b) {
  return a > b
    ? null_value
    : filter(a, b)
    ? combiner(
        term(a),
        filtered_accumulate(combiner, filter, null_value, term, next(a), next, b)
      )
    : filtered_accumulate(combiner, filter, null_value, term, next(a), next, b);
}
