// a- apply_generic enters an infinite loop

// b- apply_generic work correctly as is

// c- Modified apply_generic so that it doesn't try coercion if the two arguments have the same type:

function apply_generic(op, args) {
  const type_tags = map(type_tag, args);
  const fun = get(op, type_tags);
  if (!is_undefined(fun)) {
    return apply(fun, map(contents, args));
  } else {
    if (length(args) === 2) {
      const type1 = head(type_tags);
      const type2 = head(tail(type_tags));
      const a1 = head(args);
      const a2 = head(tail(args));
      const t1_to_t2 = get_coercion(type1, type2);
      const t2_to_t1 = get_coercion(type2, type1);
      if (type1 === type2) {
        return error(list(op, type_tags), "No method for these types");
      } else if (t1_to_t2 !== null) {
        return apply_generic(op, list(t1_to_t2(a1), a2));
      } else if (t2_to_t1 !== null) {
        return apply_generic(op, list(a1, t2_to_t1(a2)));
      } else {
        return error(list(op, type_tags), "No method for these types");
      }
    } else {
      return error(list(op, type_tags), "No method for these types");
    }
  }
}
