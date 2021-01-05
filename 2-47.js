For each constructor supply the appropriate selectors to produce an implementation for frames:


// Constructor 1
function make_frame(origin, edge1, edge2) {
  return list(origin, edge1, edge2);
}

function origin(frame) {
  return list_ref(frame, 1);
}

function first_edge(frame) {
  return list_ref(frame, 2);
}

function second_edge(frame) {
  return list_ref(frame, 3);
}

// Constructor 2
function make_frame(origin, edge1, edge2) {
  return pair(origin, pair(edge1, edge2));
}

function origin(frame) {
  return head(frame);
}

function first_edge(frame) {
  return head(tail(frame));
}

function second_edge(frame) {
  return tail(tail(frame));
}
