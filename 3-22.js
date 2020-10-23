function make_queue() {
  let queue = pair(null, null);
  
  function front_ptr() {
    return head(queue);
  }
  
  function rear_ptr() {
    return tail(queue);
  }
  
  function set_front_ptr(item) {
    set_head(queue, item);
  }
  
  function set_rear_ptr(item) {
    set_tail(queue, item);
  }
  
  function is_empty_queue() {
    return is_null(front_ptr());
  }
  
  function insert_queue(item) {
    const new_pair = pair(item, null);
    if (is_empty_queue()) {
      set_front_ptr(new_pair);
      set_rear_ptr(new_pair);
    } else {
      set_tail(rear_ptr(), new_pair);
      set_rear_ptr(new_pair);
    }
    return queue;
  }
  
  function delete_queue() {
    if (is_empty_queue()) {
      error(queue, "delete_queue called with an empty queue");
    } else {
      set_front_ptr(tail(front_ptr()));
      return queue;
    }
  }
  
  function dispatch(m) {
    return m === "insert" ? insert_queue : m === "delete" ? delete_queue : error(m, "command not found");
  }
  
  return dispatch;
}

const q1 = make_queue();
q1("insert")("a");
q1("insert")("b");
q1("delete")();
q1("delete")();
