// Modify fixed_point() so that it prints the sequence of approximations it generates, using the primitive function display shown in exercise 1.22. 
// Then find a solution to x * x = 1000 by finding a fixed point of x↦log(1000)/log(x). 
// (Use the primitive function math_log which computes natural logarithms.) 
// Compare the number of steps this takes with and without average damping.


function log(x) {
  return fixed_point(x => math_log(1000) / math_log(x), 2.0);
}

function log_with_damping(x) {
  return fixed_point(x => average(x, math_log(1000) / math_log(x)), 2.0);
}

function average(x, y) {
  return (x + y) / 2;
}

const tolerance = 0.00001;
function fixed_point(f, first_guess) {
  function abs(n) {
    return n < 0 ? -n : n;
  }
  function close_enough(x, y) {
    return abs(x - y) < tolerance;
  }
  function try_with(guess) {
    display(guess);
    const next = f(guess);
    return close_enough(guess, next) ? next : try_with(next);
  }
  return try_with(first_guess);
}

log(3)
// 35 steps 
// -> 4.555532270803653 


log_with_damping(3);
// 10 steps
// -> 4.555537551999825
