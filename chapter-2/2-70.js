// Use generate_huffman_tree (exercise 2.69) to generate a corresponding Huffman tree, and use encode (exercise 2.68) to encode the following message:

const pairs = list(
  list("A", 2),
  list("BOOM", 1),
  list("GET", 2),
  list("JOB", 2),
  list("NA", 16),
  list("SHA", 3),
  list("YIP", 9),
  list("WAH", 1)
);

const huffman_tree = generate_huffman_tree(pairs);

const message = list(
  "GET",
  "A",
  "JOB",
  "SHA",
  "NA",
  "NA",
  "NA",
  "NA",
  "NA",
  "NA",
  "NA",
  "NA",
  "GET",
  "A",
  "JOB",
  "SHA",
  "NA",
  "NA",
  "NA",
  "NA",
  "NA",
  "NA",
  "NA",
  "NA",
  "WAH",
  "YIP",
  "YIP",
  "YIP",
  "YIP",
  "YIP",
  "YIP",
  "YIP",
  "YIP",
  "YIP",
  "SHA",
  "BOOM"
);

const encoded_message = encode(message, huffman_tree);

// How many bits are required for the encoding? 
length(encoded_message); // 84
