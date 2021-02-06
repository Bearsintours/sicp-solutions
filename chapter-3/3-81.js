function rand(requests) {
  function dispatch(request, num) {
    return request === "generate" ? rand_update(num) : random_init;
  }
  return pair(random_init, () => stream_map((request) => dispatch(request, rand), requests));
}
