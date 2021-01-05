concurrent_execute(
  () => {
    x = s(() => x * x)(undefined);
  },
  s(() => {
    x = x + 1;
  })
);

// Possible results:
// 101:	T1 sets x to 100 and then T2 increments x to 101
// 121:	T2 increments x to 11 and then T1 sets x to 11 times 11
// 100:	T1 accesses x (twice), then T2 sets x to 11, then T1 sets x to 100
