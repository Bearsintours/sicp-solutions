# Write a function that computes elements of Pascal's triangle by means of a recursive process:

function triangle(index, row){
    if(index < 1 || index > row) {
        return false;
    } else if(index === 1 || index === row){ 
        return 1;
    } else {
        return triangle(index - 1, row - 1) + triangle(index, row - 1);
    }
}

// triangle(3, 5);
// => 6
