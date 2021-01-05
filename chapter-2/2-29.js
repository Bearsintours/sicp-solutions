function make_mobile(left, right) {
  return list(left, right);
}

function make_branch(length, structure) {
  return list(length, structure);
}

function left_branch(mobile) {
  return head(mobile);
}

function right_branch(mobile) {
  return tail(mobile);
}

function branch_length(branch) {
  return head(branch);
}

function branch_structure(branch) {
  return head(tail(branch));
}

function branch_weight(branch) {
  return is_pair(branch_structure(branch))
    ? branch_weight(branch_structure(head(branch))) +
        branch_weight(branch_structure(tail(branch)))
    : is_null(branch_structure(branch))
    ? 0
    : branch_structure(branch);
}

function total_weight(mobile) {
  return (
    branch_weight(left_branch(mobile)) + branch_weight(right_branch(mobile))
  );
}

function torque_branch(branch) {
  branch_length(branch) * total_weight(branch);
}

function is_balanced(mobile) {
  if (
    torque_branch(left_branch(mobile)) !== torque_branch(right_branch(mobile))
  ) {
    return false;
  } else {
    is_balanced(branch_structure(left_branch(mobile)));
    is_balanced(branch_structure(right_branch(mobile)));
  }
  return true;
}
