// What happens if we (perversely) ask the interpreter to evaluate the combination f(f)?

function f(g) {
   return g(2);
}

f(z => z * (z + 1));

f(f)
// f(2)
// (2)(2)
// -> Error: Calling non-function value 2


