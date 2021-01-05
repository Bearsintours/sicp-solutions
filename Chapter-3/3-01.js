function make_accumulator(initial_value) {
  let sum = initial_value;
  function add(arg) {
    sum = sum + arg;
    return sum;
  }
  return add;
}

const a = make_accumulator(5);

a(10); // 15
a(10); // 25
