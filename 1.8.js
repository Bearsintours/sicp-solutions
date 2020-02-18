function guess_cube_root(x){
		return cube_root_iter(1, x)
}

function cube_root_iter(guess, x) {
    return good_enough(guess, x)
           ? guess
           : cube_root_iter(improve(guess, x), x);
}

function good_enough(guess, x){
		return relative_diff(guess, improve(guess, x)) < 0.0001
}

function relative_diff(guess, improved_guess){
		return Math.abs(guess - improved_guess)
}

function improve(guess, x){
		console.log('guess', guess)
    console.log('improved guess', ((x / guess ) + guess) / 2)
		return ((x / (guess * guess ) + (2 * guess))) / 3
}

guess_cube_root(1000)
