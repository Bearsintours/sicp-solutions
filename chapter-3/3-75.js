function make_zero_crossings(input_stream, last_value, last_avg) {
  const avpt = (head(input_stream) + last_value) / 2;
  return pair(sign_change_detector(avpt, last_avg), () =>
    make_zero_crossings(stream_tail(input_stream), head(input_stream), avpt)
  );
}
