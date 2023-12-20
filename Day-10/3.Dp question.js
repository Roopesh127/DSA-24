// To find the largest elements for the 2 dimensional array.

// var input = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 9],
//     [45, 76, 2, 1],
//     [89, 90, 87, 9],
//   ];  
//   // Output = [4, 9, 76, 90];

function dynamic(input){
    var blank =[];
    for(let i=0;i<input.length;i++){
        let max=0;
        for(let j=0;j<input[i].length;j++){
            if(input[i][j]>max){
                max = input[i][j];
                // console.log(max)
            }
        }
        blank.push(max);
    }
    console.log(blank)
}
dynamic([
        [1, 2, 3, 4],
        [5, 6, 7, 9],
        [45, 76, 2, 1],
        [89, 90, 87, 9],
      ])

// const maxelem = (arr)=>{
//     let blank = [];
//     let max =0;
//     for(let i=0;i<arr.length;i++){ 
    
//         if(arr[i]>max){
//             max = arr[i];
//             // console.log(max)
//         }
//         // return max;
//     }
//     console.log("line13",max);
//     }
//     console.log(maxelem([1,2,3,4]))