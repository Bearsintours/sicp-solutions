let state = 1;

function rand(cmd) {
  if (cmd === "generate") {
    state = rand_update(state);
    return state;
  } else if (cmd === "reset") {
    return (init_value) => {
      state = init_value;
    };
  } else {
    return "unknown command";
  }
}
