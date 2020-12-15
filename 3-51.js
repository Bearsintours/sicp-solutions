
let x = stream_map(display, stream_enumerate_interval(0, 10));
stream_ref(x, 5);
stream_ref(x, 7);
// prints 0 to 5 then 1 to 7


let x = stream_map_optimized(display, stream_enumerate_interval(0, 10));
stream_ref(x, 5);
stream_ref(x, 7);
// prints 0 to 7
