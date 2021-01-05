// Show how to generalize apply_generic to handle coercion in the general case of multiple arguments

function apply_generic(op, args) {
  const type_tags = map(type_tag, args);
  const fun = get(op, type_tags);
  if (!is_undefined(fun)) {
    return apply(fun, map(contents, args));
  } else {
    const target_type = find_coerced_type(type_tags);
    if (!is_null(target_type)) {
      return apply_generic(op, coerce_all(target_type, args));
    } else {
      return error(list(op, type_tags), "No method for these types");
    }
  }
}

function find_coerced_type(type_tags) {
  return is_null(type_tags)
    ? null
    : can_coerce_to(type_tags, head(type_tags))
    ? head(type_tags)
    : find_coerced_type(tail(type_tags));
}

function can_coerce_to(type_tags, target_type) {
  return accumulate(
    (type, result) => result && (type === target_type || !is_null(get_coercion(type, target_type))),
    true,
    type_tags
  );
}

function coerce_all(target_type, args) {
  return map((arg) => (type_tag(arg) === target_type ? arg : get_coercion(type_tag(arg), target_type)(arg)), args);
}

function javascript_number_to_complex(n) {
  return make_complex_from_real_imag(contents(n), 0);
}

put_coercion("javascript_number", "complex", javascript_number_to_complex);

const c = make_complex_from_real_imag(4, 3);
const n = make_javascript_number(7);

put("add", list("complex", "complex", "complex"), (x, y, z) =>
  attach_tag(
    "add",
    make_complex_from_real_imag(real_part(x) + real_part(y) + real_part(z), imag_part(x) + imag_part(y) + imag_part(z))
  )
);

function add_three(x, y, z) {
  return apply_generic("add", list(x, y, z));
}

add_three(c, n, c);
// ["add", ["complex", ["rectangular", [15, 6]]]]
