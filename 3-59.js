function integrate_series(s) {
  return stream_map((x) => x / integers, s);
}

const exp_series = pair(1, () => integrate_series(exp_series));

const cosine_series = pair(1, () => integrate_series(sine_series));

const sine_series = pair(0, () => scale_stream(integrate_series(cosine_series), -1));
