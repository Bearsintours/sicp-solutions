// Using the raise operation of exercise 2.83, modify the apply_generic function so that 
// it coerces its arguments to have the same type by the method of successive raising


function apply_generic(op, args) {
  const type_tags = map(type_tag, args);
  const fun = get(op, type_tags);
  if (!is_undefined(fun)) {
    return apply(fun, map(contents, args));
  } else {
    if (length(args) === 2) {
      const a1 = raise_to_top(head(args));
      const a2 = raise_to_top(head(tail(args)));
      if (!is_null(a1) && !is_null(a2)) {
        return apply_generic(op, list(a1, a2));
      } else {
        return error(list(op, type_tags), "No method for these types");
      }
    } else {
      return error(list(op, type_tags), "No method for these types");
    }
  }
}

function raise_to_top(x) {
  return type_tag(x) === "complex" ? x : raise_to_top(raise(x));
}

function raise(x) {
  return apply_generic("raise", list(x));
}
