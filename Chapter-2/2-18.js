# Define a function reverse that takes a list as argument and returns a list of the same elements in reverse order:

function reverse_list(list) {
  return is_null(list)
    ? null
    : append(reverse(tail(list)), pair(head(list), null));
}

reverse(list(1, 4, 9, 16, 25));
// result: [25, [16, [9, [4, [1, null]]]]]
