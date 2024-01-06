// Adding an elements to the array when elements are consecutive numbers upto 10

// const inputA = [1, 2, 3, 4];
// Output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const inputB = [4, 2, 4, 3, 1];
// Output = ("Not a consecutive since 4 is repeating");


function Consecutive(arr){
    let min = 1;
    let max = 10;
    let blank = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i]<min){
            min = arr[i]
        }
        for(let j = i+1;j<arr.length;j++){
            if(arr[i]!==arr[j]){
                for(let p=min;p<=max;p++){
                    if(!arr.includes(p)){
                        blank.push(p);
                    }
                }
            }
            else{
                console.log("Not a consecutive number is repeating")
            }
        }
    }

      

    let finalblank = [...arr,...blank];
        console.log(finalblank)
}
Consecutive([1, 3, 4, 5, 6])