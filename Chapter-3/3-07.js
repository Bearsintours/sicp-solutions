function make_account(balance, pwd) {
  const user_pwd = pwd;
  let joint_pwd = null;
  function withdraw(amount) {
    if (balance >= amount) {
      balance = balance - amount;
      return balance;
    } else {
      return "Insufficient funds";
    }
  }
  function deposit(amount) {
    balance = balance + amount;
    return balance;
  }
  function add_account(pwd) {
    joint_pwd = pwd;
    return joint_pwd;
  }
  function dispatch(pwd, m) {
    if (!is_null(pwd) && (pwd === user_pwd || pwd === joint_pwd)) {
      return m === "withdraw"
        ? withdraw
        : m === "deposit"
        ? deposit
        : m === "add_account"
        ? add_account
        : error(m, "Unknown request -- make_account");
    } else {
      return (amount) => "Incorrect password";
    }
  }
  return dispatch;
}

function make_joint(acc, pwd, joint_pwd) {
  acc(pwd, "add_account")(joint_pwd);
  return acc;
}

const peter_acc = make_account(100, "open sesame");
peter_acc("open sesame", "deposit")(40);
const paul_acc = make_joint(peter_acc, "open sesame", "rosebud");
paul_acc("rosebud", "withdraw")(100);
