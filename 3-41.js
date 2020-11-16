function make_account(balance) {
  function withdraw(amount) {
    if (balance > amount) {
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
  const protect = make_serializer();
  function dispatch(m) {
    return m === "withdraw"
      ? protect(withdraw)
      : m === "deposit"
      ? protect(deposit)
      : m === "balance"
      ? protect(() => balance)(undefined) // serialized
      : error(m, "Unknown request -- make_account");
  }
  return dispatch;
}

// This implementation will ensure the balance can't change during the "balance" operation.
// But the balance could still change right after the balance is checked so this optimization is not really necessary.
