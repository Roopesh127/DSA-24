// Convert 2D/3D array into 1D using reduce function and inbuilt function i.e flat
// input
// const arr = [
//     ["a", "b"],
//     ["c", "d"],
//     ["e", "f"],
//   ];
  
  // Output = ["a", "b", "c", "d", "e", "f"];

// 1.  ---> By the using of two loop
//   function TwoDtoOneD(arr){
//     let blank = [];
//      for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr[i].length;j++){
//             blank.push(arr[i][j])

//         }
//      }
//      console.log(blank)
//   }
//   TwoDtoOneD([["a", "b"], ["c", "d"], ["e", "f"]]);


// 2.-----> by using flat method

// function TwoDtoOneD(arr){
//    let new1 = arr.flat();
//    console.log(new1)
//  }
//  TwoDtoOneD([["a", "b"], ["c", "d"], ["e", "f"]]);
  

// 3. -----> by using of reduce method

// function TwoDtoOneD(arr){
//     let flat = arr.reduce((accu,flatarr)=>accu.concat(flatarr),[]);
//     console.log(flat)
// }
//  TwoDtoOneD([["a", "b"], ["c", "d"], ["e", "f"]]);







  // Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

// function searchMatrix(matrix, target) {
//    let flatarr = []
//    for(let i=0;i<matrix.length;i++){
//        for(let j=0;j<matrix[i].length;j++){
//            flatarr.push(matrix[i][j])
//        }
//    }
//    console.log(flatarr)
//    if(flatarr.includes(target)){
//        return true;
//    }
//    else {
//        return false;
//    }
// };
// console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],3))