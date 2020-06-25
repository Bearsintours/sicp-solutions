// Implement the lookup function for the case where the set of records is structured as a binary tree, ordered by the numerical values of the keys

function make_record(key, data) {
  return pair(key, data);
}

function key(record) {
  return head(record);
}

function data(record) {
  return tail(record);
}

function lookup(given_key, set_of_records) {
  return (
    !is_null(set_of_records) &&
    (equal(given_key, key(head(set_of_records)))
      ? head(set_of_records)
      : lookup(given_key, tail(set_of_records)))
  );
}

function lookup_tree(given_key, set_of_records) {
  return is_null(set_of_records)
    ? null
    : (equal(given_key), key(entry(set_of_records)))
    ? head(set_of_records)
    : given_key < key(entry(set_of_records))
    ? lookup(given_key, left_branch(set_of_records))
    : lookup(given_key, right_branch(set_of_records));
}
