let arr = [
      [1, 2, [10, 11, 12, 13, 14, 15, [10, 11, 12, 13, 14, 15]]],
      [3, 4],
      [5, 6, 7, 8, 9, [5, 6, 7, 8, 9, [5, 6, 7, 8, 9]]],
      [10, 11, 12, 13, 14, 15],
     ];

//  output = [1,2,10,11,12,13,14,15,10........,14,15]   

const flatArrayV1 = (arr) => {
    // const result = arr.flat(); // Not working for nested
    const result = arr.flat(Infinity);
    return result;
  };
  