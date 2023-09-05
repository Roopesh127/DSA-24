// WHAT IS RECURSSION METHOD  ??

// const runLoopInReverse = (num) => {
//     for (let i = num; i > 0; i--) {
//       console.log(i);
//     }
//   };
  
  const runLoopInReverseUsingRecusrion = (num) => {
    const iterateNumer = (i) => {
      console.log(i);
      if (i !== 0) {
        num--;
        iterateNumer(num);
      }
    };
  
    iterateNumer(num);
  };
  
  runLoopInReverseUsingRecusrion(10);
  
