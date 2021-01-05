// Concurrent execution without serialization

let x = 10;
concurrent_execute(
  () => {
    x = x * x;
  },
  () => {
    x = x * x * x;
  }
);

// Possible values for x:
// 100: T1 gets x, then T2 sets x to 10 * 10 * 10, then T1 sets x to 10 * 10
// 1000: T2 gets x, then T1 sets x to 10 * 10, then T2 sets x to 10 * 10 * 10
// 10000: T2 changes x from 10 to 1000 between the two times that T1 accesses the value of x during the evaluation of x * x
// 10000: T1 changes x from 10 to 100 between the first and second times that T2 accesses the value of x during the evaluation of x * x * x
// 100000: T1 changes x from 10 to 100 between the second and third times that T2 accesses the value of x during the evaluation of x * x * x
// 1000000: T1 sets x to 100 and then T2 sets x to 100 * 100 * 100
// 1000000: T2 sets x to 1000 and then T1 sets x to 1000 * 1000


// Concurrent execution with serialization

let x = 10;
const s = make_serializer();

concurrent_execute(
  s(() => {
    x = x * x;
  }),
  s(() => {
    x = x * x * x;
  })
);

// Possible values for x:
// 1000000: T1 sets x to 100 and then T2 sets x to 100 * 100 * 100
// 1000000: T2 sets x to 1000 and then T1 sets x to 1000 * 1000


                    
   
