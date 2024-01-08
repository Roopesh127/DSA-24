// i/p = "aaabcddd"      o/p = 4;
// i/p = "sdssddhhgy"    o/p = 5;

function OriginalStringCount(str){
    let arr = str.split("");
    let final = [];
    // console.log(arr)
    for(let i=0;i<arr.length;i++){
        if(!final.includes(arr[i])){
            final.push(arr[i])
        }
    }
    console.log(final.length)
}
OriginalStringCount("aaabcddd");