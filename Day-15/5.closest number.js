// To find the closest number in an array from the given input
// Input
// const inputArr = [1, 10, 7, 2, 4, 9];
// const nearbyNumber = 5;

// Output = 4;


function NearbyNumber(arr,num){
    let dif = Infinity;
    let number;
    for(let i=0;i<arr.length;i++){
         different = Math.abs(num - arr[i]);
       if(different < dif){
         dif = different;
         number = arr[i];
       }
     }
     console.log(number)
}
NearbyNumber([1, 10, 7, 2, 41,3, 9],5)
