// Declare a function tan_cf(x, k) that computes an approximation to the tangent function based on Lambert's formula. 
// As in exercise 1.37, k specifies the number of terms to compute.

function tan_cf(x, k) {
  return cont_frac(
    (i) => (i === 1 ? x : -(x * x)),
    (i) => 2 * i - 1,
    k
  );
}
