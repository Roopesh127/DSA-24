// Linear Search in C
// input --> arr = [1,2,3,4,5] , num = 3
// output -> 2
const arr = [1,2,3,4,5,6,7,8,9]
const num = 1
function searchIndex(){
 for(let i=0;i<arr.length;i++){
    if( arr[i] == num){
        return i;
    }
   }
   return -1;
}
console.log(searchIndex(arr,num))