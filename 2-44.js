// Define the function up_split used by corner_split. 
// It is similar to right_split, except that it switches the roles of stack and beside.


function up_split(painter, n) {
  if (n === 0) {
    return painter;
  } else {
    const smaller = up_split(painter, n - 1);
    return stack(beside(smaller, smaller), painter);
  }
}

show(up_split(heart, 4));
