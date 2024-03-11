// To find longest word from a string using (for of Loop) means iterate by an elements not by indexing.

// function longestword(x){
//     for(let i of x){
//         console.log(i)
//     }
//         // let new1 = i.split(" ");
//     //     // console.log(new1)
//     //     let max =0;
//     //     for(let z of new1){
//     //         max = z.length > max;
//     //         return max;
//     //     }
//     }
// }
// console.log(longestword(" hello this is roopesh and how are you" ));

function longestword(x){
    for(let i of x){
        // console.log(i)

    let new1 = i.split("");
        // console.log(new1)
        let max =0;
        for(let z of new1){
            max = z.length > max;
            return max;
        }
    }
}
console.log(longestword(" hello this is roopesh and how are you" ));