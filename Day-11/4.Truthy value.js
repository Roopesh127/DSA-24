
// /To find only truthy values from an array.
        
// const input = ["priya", 0, "", false, null, undefined, "ate", NaN, 9];
//      Output = ["priya", "ate", 9];


        function Truthyvalue(arr){
            let blank = [];
            for(let i=0;i<arr.length;i++){
            if(arr[i]){
                blank.push(arr[i])
               }
            }
            console.log(blank)
        }
        Truthyvalue(["priya", 0, "", false, null, undefined, "ate", NaN, 9])