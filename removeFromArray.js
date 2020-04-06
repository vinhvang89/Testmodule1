function removeFromArray(x,array) {
    for (let i = 0; i <array.length ; i++) {
        if( array[i] === x){
            array.splice(i,1)
        }
    }
    return array;
}
let array2 = [2,3,4,5,8,9];
console.log(removeFromArray(5,array2));