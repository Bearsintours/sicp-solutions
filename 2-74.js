function make_file(division, file) {
  return pair(division, file);
}

function file_division(file) {
  return head(file);
}

function file_content(file) {
  return tail(file);
}

function get_record(employee_name, file) {
  const division = file_division(file);
  const file_content = file_content(file);
  return get("employee", division)(employee_name, file_content);
}

function make_record(division, record) {
  return pair(division, record);
}

function record_division(record) {
  return head(record);
}

function record_content(record) {
  return tail(record);
}

function get_salary(record) {
  const division = record_division(record);
  const record_content = record_content(record);
  return get("salary", division)(record_content);
}

function find_employee_record(employee_name, files) {
  if (is_null(files)) {
    return undefined;
  } else {
    const record = get_record(employee_name, head(files));
    return is_null(record) ? find_employee_record(employee_name, tail(files)) : record;
  }
}
