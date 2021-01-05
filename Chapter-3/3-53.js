const s = pair(1, () => add_streams(s, s));

eval_stream(s, 10);
// [1, [2, [4, [8, [16, [32, [64, [128, [256, [512, null]]]]]]]]]]
