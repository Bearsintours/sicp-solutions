function stream_enumerate_interval(low, high) {
  return low > high ? null : pair(low, () => stream_enumerate_interval(low + 1, high));
}

function is_even(n) {
  return n % 2 === 0;
}

const max_display = 20;
function display_stream(s) {
  function display_stream_iter(st, n) {
    if (is_null(st)) {
    } else if (n === 0) {
      display("", "...");
    } else {
      display(head(st));
      display_stream_iter(stream_tail(st), n - 1);
    }
  }
  display_stream_iter(s, max_display);
}

let sum = 0;

function accum(x) {
  sum = x + sum;
  return sum;
}

const seq = stream_map(accum, stream_enumerate_interval(1, 20));
display(sum) // return 1

const y = stream_filter(is_even, seq);
display(sum) // return 6

const z = stream_filter(x => x % 5 === 0, seq);
display(sum) // return 15

stream_ref(y, 7);
display(sum) // return 162

display_stream(z);
display(sum) // return 362
