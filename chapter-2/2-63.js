function entry(tree) {
  return head(tree);
}
function left_branch(tree) {
  return head(tail(tree));
}
function right_branch(tree) {
  return head(tail(tail(tree)));
}
function make_tree(entry, left, right) {
  return list(entry, left, right);
}

function adjoin_set(x, set) {
  return is_null(set)
    ? make_tree(x, null, null)
    : x === entry(set)
    ? set
    : x < entry(set)
    ? make_tree(entry(set), adjoin_set(x, left_branch(set)), right_branch(set))
    : make_tree(entry(set), left_branch(set), adjoin_set(x, right_branch(set)));
}

function tree_to_list_1(tree) {
  display("tree:");
  display(tree);
  return is_null(tree)
    ? null
    : append(
        tree_to_list_1(left_branch(tree)),
        pair(entry(tree), tree_to_list_1(right_branch(tree)))
      );
}

function tree_to_list_2(tree) {
  function copy_to_list(tree, result_list) {
    display("tree:");
    display(tree);
    display("result list:");
    display(result_list);
    return is_null(tree)
      ? result_list
      : copy_to_list(
          left_branch(tree),
          pair(entry(tree), copy_to_list(right_branch(tree), result_list))
        );
  }
  return copy_to_list(tree, null);
}

const tree = list(
  7,
  list(3, list(1, null, null), list(5, null, null)),
  list(9, null, list(11, null, null))
);

tree_to_list_1(tree);
// [1, [3, [5, [7, [9, [11, null]]]]]]

tree_to_list_2(tree);
// [1, [3, [5, [7, [9, [11, null]]]]]]
