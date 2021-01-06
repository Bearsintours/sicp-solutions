/**
 * Louis's version is less efficient since it does not make use of memo in the recursion call 
 * (a new stream is created for every `sqrt_stream(x)`).
 * Without memoization, both versions have the same efficiency.
 */
