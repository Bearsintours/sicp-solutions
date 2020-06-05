// The functions right_split and up_split can be expressed as instances of a general splitting operation. 
// Define a function split:

function split(dir_op, op) {
  function do_split(painter, n) {
    if (n === 0) {
      return painter;
    } else {
      const smaller = do_split(painter, n - 1);
      return dir_op(painter, op(smaller, smaller));
    }
  }
  return do_split;
}

const right_split = split(beside, stack);
const up_split = split(stack, beside);

show(up_split(heart, 4));
