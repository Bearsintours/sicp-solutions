// Implement is_equal as a function

// First implementation
function is_equal(list1, list2) {
  return is_null(list1) && is_null(list2)
    ? true
    : head(list1) === head(list2) ||
      (is_list(head(list1)) && is_list(head(list2)))
    ? is_equal(tail(list1), tail(list2))
    : false;
}

// Improved implementation
function is_equal(a, b) {
  return (
    (is_list(a) &&
      is_list(b) &&
      equal(head(a), head(b)) &&
      equal(tail(a), tail(b))) ||
    a === b
  );
}

is_equal(list("this", "is", "a", "list"), list("this", "is", "a", "list"));
// true

is_equal(list("this", "is", "a", "list"), list("this", list("is", "a"), "list"));
//false
