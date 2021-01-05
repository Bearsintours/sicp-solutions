# Define the functions first_denomination, except_first_denomination, and no_more 
# in terms of primitive operations on list structures:

const us_coins = list(50, 25, 10, 5, 1);
const uk_coins = list(100, 50, 20, 10, 5, 2, 1, 0.5);

function cc(amount, coin_values) {
  return amount === 0
    ? 1
    : amount < 0 || no_more(coin_values)
    ? 0
    : cc(amount, except_first_denomination(coin_values)) +
      cc(amount - first_denomination(coin_values), coin_values);
}

function no_more(coin_values) {
  return is_null(coin_values);
}

function except_first_denomination(coin_values) {
  return tail(coin_values);
}

function first_denomination(coin_values) {
  return head(coin_values);
}


