function removeFromArray(x,array) {
    for (let i = 0; i <array.length ; i++) {
        if( array[i] === x){
            array.slice(i,1);
        }
    }
    return array;
}