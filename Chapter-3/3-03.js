function make_account(balance, pwd) {
  const user_pwd = pwd;
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
  function dispatch(pwd, m) {
    if (pwd !== user_pwd) {
      return (amount) => "Incorrect password";
    } else {
      return m === "withdraw" ? withdraw : m === "deposit" ? deposit : error(m, "Unknown request -- make_account");
    }
  }
  return dispatch;
}

const acc = make_account(100, "secret password");
acc("wrong password", "deposit")(40); // "Incorrect password"
