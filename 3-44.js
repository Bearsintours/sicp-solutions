// There is no issue with this transfer implementation. 
// The difference between the transfer and the exchange problem is in the introduction of a 'difference' variable.
// The exchange() function needs to store the balance difference between 2 accounts and this requires accounts to be serialized 
// to prevent inconsistences.
// The transfer() function however does not use any internal variable
