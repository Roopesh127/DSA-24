const flatArrayV2 = (arr) => {
    const cpArr = [...arr];
    const result = [];
  
    const flatArray = (inputArr) => {
      for (let i = 0; i < inputArr.length; i++) {
        const currentElem = inputArr[i];
        if (!Array.isArray(currentElem)) {
          result.push(currentElem);
          continue;
        }
  
        flatArray(currentElem);
      }
    };
  
    flatArray(cpArr);
  
    return result;
  };
  
  console.log(flatArrayV2([1, 2, [1, 2], [1, 2, [1, 2]], 3]));
  