function union_set(set1, set2) {
  return is_null(set1)
    ? set2
    : is_element_of_set(head(set1), set2)
    ? union_set(tail(set1), set2)
    : pair(head(set1), union_set(tail(set1), set2));
}

union_set(
  adjoin_set(10, adjoin_set(20, adjoin_set(30, null))),
  adjoin_set(10, adjoin_set(15, adjoin_set(20, null)))
);
//[30, [10, [15, [20, null]]]]
