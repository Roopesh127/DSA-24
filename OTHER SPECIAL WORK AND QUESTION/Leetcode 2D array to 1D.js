// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

function searchMatrix(matrix, target) {
    let flatarr = []
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            flatarr.push(matrix[i][j])
        }
    }
    console.log(flatarr)
    if(flatarr.includes(target)){
        return true;
    }
    else {
        return false;
    }
};
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],3))