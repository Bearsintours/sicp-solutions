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

function is_element_of_set(x, set) {
  return (
    !is_null(set) &&
    (x === entry(set) ||
      (x < entry(set)
        ? is_element_of_set(x, left_branch(set))
        : is_element_of_set(x, right_branch(set))))
  );
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

function tree_to_list(tree) {
  return is_null(tree)
    ? null
    : append(
        tree_to_list(left_branch(tree)),
        pair(entry(tree), tree_to_list(right_branch(tree)))
      );
}

function list_to_tree(elements) {
  return head(partial_tree(elements, length(elements)));
}

function partial_tree(elts, n) {
  if (n === 0) {
    return pair(null, elts);
  } else {
    const left_size = math_floor((n - 1) / 2);
    const left_result = partial_tree(elts, left_size);
    const left_tree = head(left_result);
    const non_left_elts = tail(left_result);
    const right_size = n - (left_size + 1);
    const this_entry = head(non_left_elts);
    const right_result = partial_tree(tail(non_left_elts), right_size);
    const right_tree = head(right_result);
    const remaining_elts = tail(right_result);
    return pair(make_tree(this_entry, left_tree, right_tree), remaining_elts);
  }
}

function intersection_set(set1, set2) {
  if (is_null(set1) || is_null(set2)) {
    return null;
  } else {
    const x1 = head(set1);
    const x2 = head(set2);
    return x1 === x2
      ? pair(x1, intersection_set(tail(set1), tail(set2)))
      : x1 < x2
      ? intersection_set(tail(set1), set2)
      : intersection_set(set1, tail(set2));
  }
}

function union_set(set1, set2) {
  if (is_null(set1)) {
    return set2;
  } else if (is_null(set2)) {
    return set1;
  } else {
    const x1 = head(set1);
    const x2 = head(set2);
    return x1 === x2
      ? pair(x2, union_set(tail(set1), tail(set2)))
      : x1 < x2
      ? pair(x1, union_set(tail(set1), set2))
      : pair(x2, union_set(set1, tail(set2)));
  }
}

// union_set as a tree
function union_set_tree(set1, set2) {
  const list1 = tree_to_list(set1);
  const list2 = tree_to_list(set2);
  const union_list = union_set(list1, list2);
  return list_to_tree(union_list);
}

union_set_tree(
  list(
    7,
    list(3, list(1, null, null), list(5, null, null)),
    list(9, null, list(11, null, null))
  ),
  list(
    8,
    list(2, list(1, null, null), list(4, null, null)),
    list(9, null, list(11, null, null))
  )
);
//  [ 5,
//    [ [ 2,
//      [ [1, [null, [null, null]]],
//      [[3, [null, [[4, [null, [null, null]]], null]]], null] ] ],
//    [ [ 8,
//      [ [7, [null, [null, null]]],
//      [[9, [null, [[11, [null, [null, null]]], null]]], null] ] ],
//    null ] ] ]


// intersection_set as a tree
function intersection_set_tree(set1, set2) {
  const list1 = tree_to_list(set1);
  const list2 = tree_to_list(set2);
  const intersection_list = intersection_set(list1, list2);
  return list_to_tree(intersection_list);
}

intersection_set_tree(
  list(
    7,
    list(3, list(1, null, null), list(5, null, null)),
    list(9, null, list(11, null, null))
  ),
  list(
    8,
    list(2, list(1, null, null), list(4, null, null)),
    list(9, null, list(11, null, null))
  )
);
// [9, [[1, [null, [null, null]]], [[11, [null, [null, null]]], null]]]
