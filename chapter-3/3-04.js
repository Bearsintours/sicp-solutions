function make_account(balance, pwd) {
  const user_pwd = pwd;
  let attempts = 0;
  
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
  
  function alert_wrong_pwd(amount) {
    return "Incorrect password";
  }
  
  function call_the_cops(amount) {
    return "We're calling the cops!";
  }
  
  function dispatch(pwd, m) {
    if (pwd !== user_pwd) {
      if (attempts > 6) {
        return call_the_cops;
      } else {
        attempts = attempts + 1;
        return alert_wrong_pwd;
      }
    } else {
      return m === "withdraw" ? withdraw : m === "deposit" ? deposit : error(m, "Unknown request -- make_account");
    }
  }

  return dispatch;
}


const acc = make_account(100, "secret password");
acc("wrong password", "deposit")(40);
