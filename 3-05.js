function random(n) {
  return math_floor(math_random() * n);
}

function random_in_range(low, high) {
  const range = high - low;
  return low + random(range);
}

function square(x) {
  return x * x;
}

function area(x1, x2, y1, y2) {
  return math_abs(x2 - x1) * math_abs(y2 - y1);
}

function estimate_integral(P, x1, x2, y1, y2, trials) {
  const fraction = monte_carlo(trials, () => integral_test(P, x1, x2, y1, y2));
  return fraction * area(x1, x2, y1, y2);
}

function integral_test(P, x1, x2, y1, y2) {
  const x_rand = random_in_range(x1, x2);
  const y_rand = random_in_range(y1, y2);
  return P(x_rand, y_rand);
}

function monte_carlo(trials, experiment) {
  function iter(trials_remaining, trials_passed) {
    if (trials_remaining === 0) {
      return trials_passed / trials;
    } else if (experiment()) {
      return iter(trials_remaining - 1, trials_passed + 1);
    } else {
      return iter(trials_remaining - 1, trials_passed);
    }
  }
  return iter(trials, 0);
}

const P = (x, y) => square(x - 5) + square(y - 7) <= square(3);
estimate_integral(P, 2, 8, 4, 10, 1000);
