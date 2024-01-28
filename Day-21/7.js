// function parent(){
//     let name1 = "Shyam";

//     function child(){
//         console.log(name1)
//     }
//     child();
// }
// parent();

// result = [ "x" , "y" , "Z']
const arr = [
    {
    name : "x"
      },
      {
        name : "y"
          },
          {
            name : "z"
              },
]

function Arrobj(){
    let new1 = [];
    for(let i=0;i<arr.length;i++){
          new1.push(arr[i].name)
        }
    return new1;

}
console.log(Arrobj(arr));