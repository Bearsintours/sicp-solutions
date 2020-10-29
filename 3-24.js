function make_table(same_key) {
  const local_table = list("*table*");

  function assoc(key, records) {
    return is_null(records)
      ? undefined
      : same_key(key, head(head(records)))
      ? head(records)
      : assoc(key, tail(records));
  }

  function lookup(key_1, key_2) {
    const subtable = assoc(key_1, tail(local_table));
    if (is_undefined(subtable)) {
      return undefined;
    } else {
      const record = assoc(key_2, tail(subtable));
      return is_undefined(record) ? undefined : tail(record);
    }
  }
  function insert(key_1, key_2, value) {
    const subtable = assoc(key_1, tail(local_table));
    if (is_undefined(subtable)) {
      set_tail(local_table, pair(list(key_1, pair(key_2, value)), tail(local_table)));
    } else {
      const record = assoc(key_2, tail(subtable));
      if (is_undefined(record)) {
        set_tail(subtable, pair(pair(key_2, value), tail(subtable)));
      } else {
        set_tail(record, value);
      }
    }
  }
  function dispatch(m) {
    return m === "lookup" ? lookup : m === "insert" ? insert : error(m, "Unknown operation -- table");
  }
  return dispatch;
}

function same_key(x, y) {
  return equal(x, y);
}

const operation_table = make_table(same_key);
const get = operation_table("lookup");
const put = operation_table("insert");

put("letters", "a", 97);
put("letters", "b", 98);
get("letters", "a"); // 97
