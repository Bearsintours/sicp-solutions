// Redefine count_leaves from section 2.2.2 as an accumulation:

function count_leaves(t) {
  return accumulate(
    sum,
    0,
    map((subtree) => (is_pair(subtree) ? count_leaves(subtree) : 1), t)
  );
}
