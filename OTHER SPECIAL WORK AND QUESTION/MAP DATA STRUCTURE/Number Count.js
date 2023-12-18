// const arr = [AAAaBBBCcAA]
// output = [4A3B2C2A]


function NumberCount(arr){
    const Converted = arr.split("");
    const Capital = Converted.map(item=>item.toUpperCase());
    //  console.log(Capital)
    let obj = [];
    let count = 1;
    for(let i=0;i<=Capital.length-1;i++){
        if(Capital[i] === Capital[i+1]){
            count++;
        }
        else{
            obj.push(count.toString() + Capital[i])
        count = 1;
        }
    }
    console.log(obj.join(""))
}
NumberCount("AAAaBBBCcAA");



// function NumberCount(arr){
//     const Converted = arr.split("");
//     const Capital = Converted.map(item=>item.toUpperCase());
//     //  console.log(Capital)
//     let obj = {};
//     let count = 0;
//     for(let i=0;i<=Capital.length-1;i++){
//         if(Capital.hasOwnProperty(obj)){
//             count++;
           
//         }
        
//     }
// }
// NumberCount("AAAaBBBCcAA");




