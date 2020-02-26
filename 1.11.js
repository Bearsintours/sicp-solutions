// A function f is defined by the rule that f(n) = n if n < 3 and f(n) = f(n−1) + 2f(n−2) + 3f(n−3) if n ≥ 3. 

// Write a JavaScript function that computes f by means of a recursive process: 
function recur(n){
    return n < 3  
        ? n     
        : recur(n-1) + 2 * recur(n-2) + 3 * recur(n-3)
    }
}

recur(4)
// recur(3) + 2 * recur(2) + 3 * recur(1)
// recur(2) + 2 * recur(1) + 3 * recur(0) + 2 * recur(2) + 3 * recur(1)
// 2 + 2 + 0 + 4 + 3
// 11


// Write a function that computes f by means of an iterative process:
function iter(n){
    return n < 3 
        ? n
        : iter_func(2, 1, 0, n-2)
}

function iter_func(a, b, c, count){
    return count === 0 
        ? a
        : iter_func(a + 2 * b + 3 * c, a, b, count - 1)
}

iter(4)
// iter_func(2, 1, 0, 2)
// iter_func(4, 2, 1, 1)
// iter_func(11, 1, 0, 0)
// 11

