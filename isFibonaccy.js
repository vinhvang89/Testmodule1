
function isFibonaccy(x,y) {
    let flag = false;
    let fibonaccy = [];
    let a = 0;
    let b = 1;
    let c = 0;
    while (x >= 0) {
        c = a;
        a = a + b;
        b = c;
        fibonaccy.push(b);
        x--;
    }
    for (let i = 0; i < fibonaccy.length ; i++) {
        if ( fibonaccy[i] === y){
            flag = true
        }
    }
    return flag;
}
console.log(isFibonaccy(6,8));







