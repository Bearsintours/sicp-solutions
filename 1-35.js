// Show that the golden ratio ϕ (section 1.2.2) is a fixed point of the transformation x↦1+1/x
// Use this fact to compute ϕ by means of the fixed_point function.


// Golden ratio definition: ϕ2 = ϕ+1 
// x * x = x + 1
// x = x / x + 1 / x
// x = 1 + 1/x

function golden_ratio(x) {
    return fixed_point(x => 1 + (1 / x), 1.0);
}
