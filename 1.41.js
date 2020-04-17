// Declare a function double that takes a function of one argument as argument and returns a function that applies the original function twice. 
// For example, if inc is a function that adds 1 to its argument, then double(inc) should be a function that adds 2.

function double(f){
  return x => f(f(x))
}
