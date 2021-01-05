function expand(num, den, radix) {
  return pair(quotient(num * radix, den), expand((num * radix) % den, den, radix));
}

expand(1, 7, 10);
// return (1, 4, 2, 8, 5, 7, 1...)

expand(3, 8, 10);
// return (3, 7, 5, 0, 0, 0....)
