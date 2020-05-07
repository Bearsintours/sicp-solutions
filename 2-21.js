function square_list(items) {
  return is_null(items)
    ? null
    : pair(square(head(items)), square_list(tail(items)));
}

function square_list(items) {
  return map(square, items);
}

function square(x) {
  return x * x;
}

square_list(list(1, 2, 3, 4));
// returns: [1, [4, [9, [16, null]]]]
