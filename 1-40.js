// Declare a function cubic that can be used together with the newtons_method function in expressions of the form
// newtons_method(cubic(a, b, c), 1) to approximate zeros of the cubic x3+ax2+bx+c.

function cubic(a, b, c) {
  return (x) => cube(x) + (a * square(x)) + (b * x) + c;
}

newtons_method(cubic(a, b, c), 1.0);
