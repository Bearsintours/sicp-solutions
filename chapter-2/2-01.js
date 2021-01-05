// Define a better version of make_rat that handles both positive and negative arguments. 
// The function make_rat should normalize the sign so that if the rational number is positive, 
// both the numerator and denominator are positive, and if the rational number is negative, 
// only the numerator is negative.


function make_rat(n, d) {
  const g = gcd(n, d);
  return pair(sign(n) * sign(d) * abs(n / g), abs(d / g));
}

function sign(x) {
  return x > 0 ? 1 : x < 0 ? -1 : 0;
}
