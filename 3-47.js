function make_mutex() {
  const cell = list(false);
  function the_mutex(m) {
    return m === "acquire"
      ? test_and_set(cell)
        ? the_mutex("acquire") // retry
        : true
      : m === "release"
      ? clear(cell)
      : error(m, "Unknown request -- mutex");
  }
  return the_mutex;
}

function test_and_set(cell) {
  if (head(cell)) {
    return true;
  } else {
    set_head(cell, true);
    return false;
  }
}

function clear(cell) {
  set_head(cell, false);
}


// Semaphore implementation in terms of mutex:
function make_semaphore(n) {
  let threads = 0;
  const mutex = make_mutex();

  function acquire() {
    mutex("acquire");
    if (threads === n) {
      mutex("release");
      acquire();
    } else {
      threads = threads + 1;
      mutex("release");
    }
  }

  function release() {
    mutex("acquire");
    threads = threads - 1;
    mutex("release");
  }

  function the_semaphore(m) {
    return m === "acquire" ? acquire : m === "release" ? release : error(m, "Unknown request -- semaphore");
  }
  return the_semaphore;
}

// Semaphore implementation in terms of atomic test_and_set operations:
function make_semaphore(n) {
  const cell = list(false);
  let threads = 0;
  function acquire() {
    acquire_cell();
    if (threads === n) {
      clear(cell);
      acquire();
    } else {
      threads = threads + 1;
      clear(cell);
    }
  }
  function acquire_cell() {
    test_and_set(cell)
      ? acquire_cell // retry
      : true;
  }
  function release() {
    acquire_cell();
    threads = threads - 1;
    clear(cell);
  }
  function the_semaphore(m) {
    return m === "acquire" ? acquire : m === "release" ? release : error(m, "Unknown request -- mutex");
  }
  return the_semaphore;
}

