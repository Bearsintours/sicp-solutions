// Define a function last_pair that returns the list that contains only the last element of a given (nonempty) list:

function last_pair(list) {
  return is_null(tail(list)) ? list : last_pair(tail(list));
}
