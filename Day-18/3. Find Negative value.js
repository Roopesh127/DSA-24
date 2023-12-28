// To find the negative values in an array or 2D Array
// const input = [
//   [1, -1],
//   [-1, -1],
// ];

// Output = 3;

function NegativeValueCount(arr){
    let count = 0;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if(arr[i][j]<0){
                count ++;
            }
        }
    }
    console.log(count)
}
NegativeValueCount([
      [1, -1],
      [-1, -1],
    ])