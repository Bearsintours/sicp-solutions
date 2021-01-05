// Write the function encode_symbol that returns the list of bits that encodes a given symbol according to a given tree

function encode(message, tree) {
  function contains_symbol(symbol, tree) {
    return !is_null(member(symbol, symbols(tree)));
  }

  function encode_symbol(symbol, tree) {
    const left_tree = left_branch(tree);
    const right_tree = right_branch(tree);
    if (is_leaf(tree) && equal(symbol_leaf(tree), symbol)) {
      return null;
    } else if (contains_symbol(symbol, left_tree)) {
      return pair(0, encode_symbol(symbol, left_tree));
    } else if (contains_symbol(symbol, right_tree)) {
      return pair(1, encode_symbol(symbol, right_tree));
    } else {
      return error(symbol, "bad symbol -- encode symbol");
    }
  }

  return is_null(message) ? null : append(encode_symbol(head(message), tree), encode(tail(message), tree));
}
