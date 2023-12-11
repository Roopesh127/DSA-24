// To find unique values from 2 arrays and keep into one array. i.e. Union.
// a = [1,2,3,4,6,9]
// b = [2,4,5,6,7,8]
// output = [1,2,3,4,5,6,7,8,9]

function Union(a,b){
    //merge both array
    let merge = a.concat(b);
    //  console.log(merge)
   let final =  merge.filter((item,index)=> merge.indexOf(item) === index);
   console.log(final)
}
Union([1,2,3,4,5,2,1],[1,6,7,8,9,3,4])