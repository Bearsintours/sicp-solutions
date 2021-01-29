function smooth(input_stream) {
  function avg(x, y) {
    return (x + y) / 2;
  }
  return stream_map_2(avg, input_stream, stream_tail(input_stream));
}

function make_zero_crossings(input_stream, last_value) {
  return pair(sign_change_detector(head(input_stream), last_value), () =>
    make_zero_crossings(stream_tail(input_stream), head(input_stream))
  );
}
const zero_crossings = make_zero_crossings(smooth(sense_data), 0);
