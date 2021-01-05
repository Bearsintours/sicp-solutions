// Write a function fringe that takes as argument a tree (represented as a list) 
// and returns a list whose elements are all the leaves of the tree arranged in left-to-right order. 


function fringe(x) {
  return is_null(x)
    ? x
    : !is_pair(x)
    ? list(x)
    : append(fringe(head(x)), fringe(tail(x)));
}

const x = list(list(1, 2), list(3, 4));

fringe(x);
// [1, [2, [3, [4, null]]]]

fringe(list(x, x));
// [1, [2, [3, [4, [1, [2, [3, [4, null]]]]]]]]
