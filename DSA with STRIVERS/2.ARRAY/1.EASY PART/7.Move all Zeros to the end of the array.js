// const arr =[1,0,2,3,0,4,0,1]
// const arr = [1,2,0,1,0,4,0]
// const arr = [0,1,0,3,1,2]
const arr = [0]

function MoveZero(){
    let zeros = [];
    let nonZeros = [];

    for(let i=0;i<arr.length;i++){
        if(arr[i]==0){
            zeros.push(arr[i]);
        }
        if(arr[i]!==0){
            nonZeros.push(arr[i]);
        }
    }
    let merged = nonZeros.concat(zeros)
    return merged;
}
console.log(MoveZero(arr))