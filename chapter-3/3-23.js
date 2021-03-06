function make_deque() {
  let front_ptr = null;
  let rear_ptr = null;

  function front_deque() {
    return front_ptr;
  }

  function rear_deque() {
    return rear_ptr;
  }

  function make_node(item) {
    return pair(item, pair(null, null));
  }

  function node_value(node) {
    return head(node);
  }

  function prev_ptr(node) {
    return head(tail(node));
  }

  function next_ptr(node) {
    return tail(tail(node));
  }

  function set_prev_ptr(node, node2) {
    set_head(tail(node), node2);
  }

  function set_next_ptr(node, node2) {
    set_tail(tail(node), node2);
  }

  function is_empty_deque() {
    return is_null(front_ptr);
  }

  function front_insert_deque(item) {
    const new_node = make_node(item);
    if (is_empty_deque()) {
      front_ptr = new_node;
      rear_ptr = new_node;
    } else {
      set_next_ptr(new_node, front_ptr);
      set_prev_ptr(front_ptr, head(new_node));
      front_ptr = new_node;
    }
    return front_ptr;
  }

  function rear_insert_deque(item) {
    const new_node = make_node(item);
    if (is_empty_deque()) {
      front_ptr = new_node;
      rear_ptr = new_node;
    } else {
      set_next_ptr(rear_ptr, new_node);
      const rear_val = node_value(rear_ptr);
      rear_ptr = new_node;
      set_prev_ptr(rear_ptr, rear_val);
    }
    return rear_ptr;
  }

  function front_delete_deque() {
    if (is_empty_deque()) {
      error(front_ptr, "rear_delete_deque called with an empty deque");
    } else {
      front_ptr = next_ptr(front_ptr);
      set_prev_ptr(front_ptr, null);
      return front_ptr;
    }
  }

  function rear_delete_deque() {
    if (is_empty_deque()) {
      error(rear_ptr, "rear_delete_deque called with an empty deque");
    } else {
      rear_ptr = prev_ptr(rear_ptr);
      set_next_ptr(rear_ptr, null);
      return rear_ptr;
    }
  }

  function dispatch(m) {
    return m === "front_insert"
      ? front_insert_deque
      : m === "front_delete"
      ? front_delete_deque
      : m === "rear_insert"
      ? rear_insert_deque
      : m === "rear_delete"
      ? rear_delete_deque
      : error(m, "command not found");
  }

  return dispatch;
}
