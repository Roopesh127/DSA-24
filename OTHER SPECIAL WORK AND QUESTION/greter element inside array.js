
const maxelem = (arr)=>{
let blank = [];
let max =0;
for(let i=0;i<arr.length;i++){ 

    if(arr[i]>max){
        max = arr[i];
        // console.log(max)
    }
    // return max;
}
console.log("line13",max);
}
console.log(maxelem([1,2,3,4]))