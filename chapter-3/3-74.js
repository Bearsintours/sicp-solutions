const zero_crossings = stream_map_2(
  sign_change_detector,
  sense_data,
  pair(0, () => sense_data)
);
