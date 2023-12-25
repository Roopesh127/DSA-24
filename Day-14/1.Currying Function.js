// Currying function i.e sum of multiple argument functions 
//inner function can access outer function variables but outer functions 
// can't able to acceess inner function.

function curryexample(x){
    return function(y){
        return function(z){
            return x+y+z;
        }
    }
}
console.log(curryexample(10)(20)(30))