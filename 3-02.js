function make_monitored(f) {
  let counter = 0;
  function execute(cmd) {
    counter = counter + 1;
    return f(cmd);
  }
  function mf(cmd) {
    if (cmd === "how many calls") {
      return counter;
    } else if (cmd === "reset count") {
      counter = 0;
      return counter;
    } else {
      return execute(cmd);
    }
  }
  return mf;
}

const s = make_monitored(math_sqrt);
s(100); // 10
s("how many calls"); // 1
