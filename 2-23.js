// for_each((x) => display(x), list(57, 321, 88));
//The value returned by the call to for_each (not illustrated above) can be something arbitrary, such as true. 
// Give an implementation of for_each:


function for_each(f, list) {
  f(head(list));
  return is_null(items) ? true : for_each(f, tail(list));
}
