// Modify your reverse function of exercise 2.18 to produce a deep_reverse function that takes a list as argument 
// and returns as its value the list with its elements reversed and with all sublists deep-reversed as well


function deep_reverse(items) {
  return is_null(items)
    ? null
    : append(
        deep_reverse(tail(items)),
        pair(
          is_pair(head(items)) ? deep_reverse(head(items)) : head(items),
          null
        )
      );
}

const x = list(list(1, 2), list(3, 4));
// [[1, [2, null]], [[3, [4, null]], null]]

reverse(x);
// [[3, [4, null]], [[1, [2, null]], null]]

deep_reverse(x);
// [[4, [3, null]], [[2, [1, null]], null]]
