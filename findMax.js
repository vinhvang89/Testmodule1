function findMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length ; i++) {
        if ( arr[i] > max){
            max = arr[i]
        }
    }
    return max;
}
let array = [4,8,1,2,6];
console.log(findMax(array));