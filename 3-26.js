function make_table() {
  const local_table = list("*table*");

  function adjoin_set(record, set) {
    return is_null(set)
      ? make_tree(record, null, null)
      : record_key(record) === record_key(entry(set))
      ? set
      : record_key(record) < record_key(entry(set))
      ? make_tree(entry(set), adjoin_set(record, left_branch(set)), right_branch(set))
      : make_tree(entry(set), left_branch(set), adjoin_set(record, right_branch(set)));
  }

  function lookup(key) {
    function tree_lookup(tree, key) {
      if (is_null(tree)) {
        return error(key, "Key not found: ");
      } else {
        return key < record_key(entry(tree))
          ? tree_lookup(left_branch(tree), key)
          : key > record_key(entry(tree))
          ? tree_lookup(right_branch(tree), key)
          : record_val(entry(tree));
      }
    }
    return tree_lookup(tail(local_table), key);
  }

  function insert(key, value) {
    const record = make_record(key, value);
    set_tail(local_table, adjoin_set(record, tail(local_table)));
    return local_table;
  }

  function dispatch(m) {
    return m === "lookup" ? lookup : m === "insert" ? insert : error(m, "Unknown operation -- table");
  }

  return dispatch;
}

const table = make_table();
table("insert")(1, "hello");
table("insert")(2, "world");
table("insert")(0, "hi");
table("lookup")(1); // "hello"
