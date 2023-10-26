// const arr = [0,0,1,1,1,2,2,3,3,4];
// const arr = [1,1,2,2,2,3,3];
const arr = [0,0,1,1,1,2,2,3,3,4]
 
function store(){
    let origi = [];
    var dupli = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]=== arr[i+1]){
           dupli.push(arr[i])
        }
        else(
            origi.push(arr[i])
        )
     }
    //  console.log(origi);
    //  console.log(dupli);
    var  new1 = dupli.fill("_")
    // console.log(new1)
    var merge = origi.concat(new1)
    // console.log(merge)
    return merge;
}
console.log(store(arr));



