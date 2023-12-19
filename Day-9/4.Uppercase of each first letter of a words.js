// Uppercase of each first letter of a words

// Input: title = "capiTalIze tHe titLe"
// Output: "Capitalize The Title"

function Uppercase(title){
    const str = title.split(" ");
    //   console.log(str.length)
      for(let i=0;i<str.length;i++){
        for(let j=0;j<str[i].length;j++){
            // console.log(str[i][j])
            if(str[i].length>2){
                console.log(str[i])
                // const capitalize = str[i].map((map1)=>(map1.charAt(0).toUpperCase()) + (map1.slice(1).toLowerCase())).join(" ");
            console.log(capitalize)
            } 
        }
        // console.log("line 10", str[i])
        
      }
   
   
}
Uppercase("i hate leetcode")




 