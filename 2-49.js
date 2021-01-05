// Use segments_to_painter to define the following primitive painters:


// The painter that draws the outline of the designated frame
const outline_start1 = make_vect(0, 0);
const outline_end1 = make_vect(0, 1);
const outline_segment1 = make_segment(outline_start1, outline_end1);

const outline_start2 = make_vect(0, 1);
const outline_end2 = make_vect(1, 1);
const outline_segment1 = make_segment(outline_start2, outline_end2);

const outline_start3 = make_vect(1, 1);
const outline_end3 = make_vect(1, 0);
const outline_segment1 = make_segment(outline_start3, outline_end3);

const outline_start4 = make_vect(1, 0);
const outline_end4 = make_vect(0, 0);
const outline_segment1 = make_segment(outline_start4, outline_end4);

const outline = segments_to_painter(
  list(outline_segment1, outline_segment2, outline_segment3, outline_segment4)
);


// The painter that draws an X by connecting opposite corners of the frame.
const diagonal_start1 = make_vect(0, 0);
const diagonal_end1 = make_vect(1, 1);
const diagonal_segment1 = make_segment(diagonal_start1, diagonal_end1);

const diagonal_start2 = make_vect(0, 1);
const diagonal_end2 = make_vect(1, 0);
const diagonal_segment1 = make_segment(diagonal_start2, diagonal_end2);

const diagonal = segments_to_painter(
  list(diagonal_segment1, diagonal_segment2)
);


// The painter that draws a diamond shape by connecting the midpoints of the sides of the frame
const diamond_start1 = make_vect(0, 0.5);
const diamond_end1 = make_vect(0.5, 1);
const segment1 = make_segment(diamond_start1, diamond_end1);

const diamond_start1 = make_vect(0.5, 1);
const diamond_end1 = make_vect(1, 0.5);
const segment1 = make_segment(diamond_start1, diamond_end1);

const diamond_start1 = make_vect(1, 0.5);
const diamond_end1 = make_vect(0.5, 0);
const segment1 = make_segment(diamond_start1, diamond_end1);

const diamond_start1 = make_vect(0.5, 0);
const diamond_end1 = make_vect(0, 0.5);
const segment1 = make_segment(diamond_start1, diamond_end1);

const diamond = segments_to_painter(
  list(segment1, segment2, segment3, segment4)
);
