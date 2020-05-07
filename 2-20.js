// Write a function brooks, that takes a curried function as first argument and as second argument a list of arguments 
// to which the curried function is then applied, one by one, in the given order. 
// For example, the following application of brooks should have the same effect as the call plus_curried(3)(4)

function plus_curried(x) {
  return (y) => x + y;
}

function brooks(f, list) {
  return is_null(list) ? f : brooks(f(head(list), tail(list)));
}
brooks(plus_curried, list(3, 4));


// Write a function brooks_curried that can be applied as follows, to yield the same result 7:
// brooks_curried(list(plus_curried, 3, 4));

function brooks_curried(list) {
  return brooks(head(list), tail(list));
}
brooks_curried(list(plus_curried, 3, 4));
