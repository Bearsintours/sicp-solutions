// Let f and g be two one-argument functions. The composition f after g is defined to be the function x↦f(g(x)). 
// Declare a function compose that implements composition. 
// For example, if inc is a function that adds 1 to its argument: compose(square, inc)(6); returns 49.

function compose(f, g){
  return x => f(g(x))
}
