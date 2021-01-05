// Abstract your answer to exercise 2.30 to produce a function tree_map:


function tree_map(f, tree) {
  return map(
    (sub_tree) => (is_pair(sub_tree) ? tree_map(f, sub_tree) : f(sub_tree)),
    tree
  );
}

function square_tree(tree) {
  return tree_map(square, tree);
}

square_tree(list(1, list(2, list(3, 4), 5), list(6, 7)));
// result: [1, [[4, [[9, [16, null]], [25, null]]], [[36, [49, null]], null]]]
