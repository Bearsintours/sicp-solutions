// Write the function successive_merge using make_code_tree to successively merge the smallest-weight elements of the set 
// until there is only one element left, which is the desired Huffman tree:

function generate_huffman_tree(pairs) {
  function successive_merge(leaves_set) {
    return is_null(tail(leaves_set))
      ? head(leaves_set)
      : successive_merge(adjoin_set(make_code_tree(head(leaves_set), head(tail(leaves_set))), tail(tail(leaves_set))));
  }
  return successive_merge(make_leaf_set(pairs));
}

const pairs = list(list("A", 4), list("B", 2), list("C", 1), list("D", 1));

generate_huffman_tree(pairs);
