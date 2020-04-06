function isFibonaccy(x,num) {
    let fibonaccy = [];
    let flag = false;
    let a = 0;
    let b = 1 ;
    let c = 1;
    while (num >= 0) {
         c = a  ;
         a = a + b;
         b = c ;
         fibonaccy.push(b);
         num --;
    }
    for (let i = 0; i < fibonaccy.length ; i++) {
        if ( fibonaccy[i] === x ){
            flag = true;
        }
    }
    return flag;
}
console.log(isFibonaccy(7,6));

