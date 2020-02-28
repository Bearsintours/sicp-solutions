# What are the orders of growth of the space and number of steps used by this process as the amount to be changed increases?

function count_change(amount) {
    return cc(amount, 5);
}
function cc(amount, kinds_of_coins) {
    return amount === 0
           ? 1
           : amount < 0 ||
             kinds_of_coins === 0
             ? 0
             : cc(amount, kinds_of_coins - 1)
               +
               cc(amount - first_denomination(
                               kinds_of_coins),
                  kinds_of_coins);
}
function first_denomination(kinds_of_coins) {
    return kinds_of_coins === 1 ? 1 :
           kinds_of_coins === 2 ? 5 :
           kinds_of_coins === 3 ? 10 :
           kinds_of_coins === 4 ? 25 :
           kinds_of_coins === 5 ? 50 : 0;
}

# count_change(100);
# => 292


# Order of growth: 
# For n = amount and c = number of kind of coins :
# => space complexity = O(n + c) = O(n)
# => time complexity = 0(n to the power of c)
