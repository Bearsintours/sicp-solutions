function set_to_wow(x) {
  set_head(head(x), "wow");
  return x;
}

const x = list("a", "b");
const z1 = pair(x, x);
const z2 = pair(list("a", "b"), list("a", "b"));

z1 === z2;
// false

z1;
// [["a", ["b", null]], ["a", ["b", null]]]
set_to_wow(z1);
// [["wow", ["b", null]], ["wow", ["b", null]]]

z2;
// [["a", ["b", null]], ["a", ["b", null]]]
set_to_wow(z2);
// [["wow", ["b", null]], ["a", ["b", null]]]
