// If a thread attempts to enter a serialized function protecting a2, it will need to acquire a1 first.
// And since there cannot be 2 threads entering a1 at the same time, the deadlock is avoided.

function make_account_and_serializer(id, balance) {
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
  const balance_serializer = make_serializer();
  return (m) =>
    m === "withdraw"
      ? withdraw
      : m === "deposit"
      ? deposit
      : m === "balance"
      ? balance
      : m === "serializer"
      ? balance_serializer
      : m === "id"
      ? id
      : error(m, "Unknown request -- make_account");
}

function serialized_exchange(account1, account2) {
  const serializer1 = account1("serializer");
  const serializer2 = account2("serializer");
  if (account1("id") < account2("id")) {
    serializer1(serializer2(exchange))(accounts);
  } else {
    serializer2(serializer1(exchange))(accounts);
  }
}
