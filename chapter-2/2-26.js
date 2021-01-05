// Suppose we define x and y to be two lists:
// const x = list(1, 2, 3);
// const y = list(4, 5, 6);
// What result is printed by the interpreter in response to evaluating each of the following expressions:

append(x, y);
// [1, [2, [3, [4, [5, [6, null]]]]]]

pair(x, y);
// [[1, [2, [3, null]]], [4, [5, [6, null]]]]

list(x, y);
// [[1, [2, [3, null]]], [[4, [5, [6, null]]], null]]
