

function square_tree(tree) {
  return is_null(tree)
    ? null
    : is_pair(tree)
    ? pair(square_tree(head(tree)), square_tree(tail(tree)))
    : square(tree);
}

function square_tree_with_map(tree) {
  return map(
    (sub_tree) =>
      is_pair(sub_tree) ? square_tree_with_map(sub_tree) : square(sub_tree),
    tree
  );
}

function square(x) {
  return x * x;
}

square_tree(list(1, list(2, list(3, 4), 5), list(6, 7)));
// result: [1, [[4, [[9, [16, null]], [25, null]]], [[36, [49, null]], null]]]

square_tree_with_map(list(1, list(2, list(3, 4), 5), list(6, 7)));
// result: [1, [[4, [[9, [16, null]], [25, null]]], [[36, [49, null]], null]]]
