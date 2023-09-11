Input matrix = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]


Output: [[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]

function rotatematrix(mat) {
    let final = [];
    let tem = [];

    for (let i = 0; i < mat.length; i++) {
        for (j = i; j < i.length; j++)
     }
    tem.push(i(j));
}

// we are made a blank main array.
//we are taking 2 loop for iteration.
// first loop chalega main array me , mean that vo hamko 1st , 2nd, 3rd , & 4th array tak pahuchayega.
// or iss bade array ke andar available array ke element ko itterate karega.
// pehla loop i me chalega to j ki value fix rahegi or i ki value badhti jayegi.
// fir j ki value 0 to 1 per aayegi to  i  sabhi chote array ke 0,1,2,3 index ke element ko la kar rakh dega.
// har baar iterate element ko reverse karke ek balnk array me input karate jayenge , fir jab loop khtm to
// iss array ko final array me push kara denge. 