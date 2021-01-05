// Write a function iterative_improve that takes two functions as arguments: 
// a method for telling whether a guess is good enough and a method for improving a guess. 
// The function iterative_improve should return as its value a function that takes a guess as argument 
// and keeps improving the guess until it is good enough. 
// Rewrite the sqrt function of section 1.1.7 and the fixed_point function of section 1.3.3 in terms of iterative_improve:


function iterative_improve(good_enough, improve) {
  function iterate(guess) {
    return good_enough(guess) ? guess : iterate(improve(guess));
  }
  return (x) => iterate(x);
}

function sqrt(x) {
  return iterative_improve(
    (guess) => good_enough(guess, x),
    (guess) => improve(guess, x)
  )(1.0);
}

const tolerance = 0.00001;
function fixed_point(f, guess) {
  return iterative_improve((guess) => close_enough(f(guess), x), f)(guess);
}
