// Trace through all the functions called in evaluating the expression magnitude(z) where z is the object shown in figure 2.24. 

function apply(fun, args) {
  return apply_in_underlying_javascript(fun, args);
}

function apply_generic(op, args) {
  display("apply_generic called");
  display(op);
  display(args);
  const type_tags = map(type_tag, args);
  const fun = get(op, type_tags);
  return fun !== undefined
    ? apply(fun, map(contents, args))
    : error(list(op, type_tags), "No method for these types in apply_generic");
}

function add(x, y) {
  return apply_generic("add", list(x, y));
}

function sub(x, y) {
  return apply_generic("sub", list(x, y));
}

function mul(x, y) {
  return apply_generic("mul", list(x, y));
}

function div(x, y) {
  return apply_generic("div", list(x, y));
}

function real_part(z) {
  return apply_generic("real_part", list(z));
}

function imag_part(z) {
  return apply_generic("imag_part", list(z));
}

function magnitude(z) {
  return apply_generic("magnitude", list(z));
}

function angle(z) {
  return apply_generic("angle", list(z));
}

function attach_tag(type_tag, contents) {
  return pair(type_tag, contents);
}

function type_tag(datum) {
  return is_pair(datum) ? head(datum) : error(datum, "bad tagged datum -- type_tag");
}

function contents(datum) {
  return is_pair(datum) ? tail(datum) : error(datum, "bad tagged datum -- contents");
}

function square(x) {
  return x * x;
}

function install_rectangular_package() {
  // internal functions
  function real_part(z) {
    return head(z);
  }
  function imag_part(z) {
    return tail(z);
  }
  function make_from_real_imag(x, y) {
    return pair(x, y);
  }
  function magnitude(z) {
    return math_sqrt(square(real_part(z)) + square(imag_part(z)));
  }
  function angle(z) {
    return math_atan(imag_part(z), real_part(z));
  }
  function make_from_mag_ang(r, a) {
    return pair(r * math_cos(a), r * math_sin(a));
  }

  // interface to the rest of the system
  function tag(x) {
    return attach_tag("rectangular", x);
  }
  put("real_part", list("rectangular"), real_part);
  put("imag_part", list("rectangular"), imag_part);
  put("magnitude", list("rectangular"), magnitude);
  put("angle", list("rectangular"), angle);
  put("make_from_real_imag", "rectangular", (x, y) => tag(make_from_real_imag(x, y)));
  put("make_from_mag_ang", "rectangular", (r, a) => tag(make_from_mag_ang(r, a)));
  return "done";
}

install_rectangular_package();

function install_polar_package() {
  // internal functions
  function magnitude(z) {
    return head(z);
  }
  function angle(z) {
    return tail(z);
  }
  function make_from_mag_ang(r, a) {
    return pair(r, a);
  }
  function real_part(z) {
    return magnitude(z) * math_cos(angle(z));
  }
  function imag_part(z) {
    return magnitude(z) * math_sin(angle(z));
  }
  function make_from_real_imag(x, y) {
    return pair(math_sqrt(square(x) + square(y)), math_atan(y, x));
  }

  // interface to the rest of the system
  function tag(x) {
    return attach_tag("polar", x);
  }
  put("real_part", list("polar"), real_part);
  put("imag_part", list("polar"), imag_part);
  put("magnitude", list("polar"), magnitude);
  put("angle", list("polar"), angle);
  put("make_from_real_imag", "polar", (x, y) => tag(make_from_real_imag(x, y)));
  put("make_from_mag_ang", "polar", (r, a) => tag(make_from_mag_ang(r, a)));
  return "done";
}

install_polar_package();

function install_complex_package() {
  // imported functions from rectangular and polar packages
  function make_from_real_imag(x, y) {
    return get("make_from_real_imag", "rectangular")(x, y);
  }
  function make_from_mag_ang(r, a) {
    return get("make_from_mag_ang", "polar")(r, a);
  }

  // internal functions
  function add_complex(z1, z2) {
    return make_from_real_imag(real_part(z1) + real_part(z2), imag_part(z1) + imag_part(z2));
  }
  function sub_complex(z1, z2) {
    return make_from_real_imag(real_part(z1) - real_part(z2), imag_part(z1) - imag_part(z2));
  }
  function mul_complex(z1, z2) {
    return make_from_mag_ang(magnitude(z1) * magnitude(z2), angle(z1) + angle(z2));
  }
  function div_complex(z1, z2) {
    return make_from_mag_ang(magnitude(z1) / magnitude(z2), angle(z1) - angle(z2));
  }

  // interface to rest of the system
  function tag(z) {
    return attach_tag("complex", z);
  }
  put("real_part", list("complex"), real_part);
  put("imag_part", list("complex"), imag_part);
  put("magnitude", list("complex"), magnitude);
  put("angle", list("complex"), angle);
  put("add", list("complex", "complex"), (z1, z2) => tag(add_complex(z1, z2)));
  put("sub", list("complex", "complex"), (z1, z2) => tag(sub_complex(z1, z2)));
  put("mul", list("complex", "complex"), (z1, z2) => tag(mul_complex(z1, z2)));
  put("div", list("complex", "complex"), (z1, z2) => tag(div_complex(z1, z2)));
  put("make_from_real_imag", "complex", (x, y) => tag(make_from_real_imag(x, y)));
  put("make_from_mag_ang", "complex", (r, a) => tag(make_from_mag_ang(r, a)));
  return "done";
}

install_complex_package();

function make_complex_from_real_imag(x, y) {
  return get("make_from_real_imag", "complex")(x, y);
}

const complex = make_complex_from_real_imag(3, 4);

magnitude(complex);
// 5

// How many times is apply_generic invoked?
// 2 times

//  What function is dispatched to in each case?
// operation magnitude is dispatched in both cases (with tag "complex" and tag "rectangular")

