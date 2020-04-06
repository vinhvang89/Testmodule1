function Fibonaccy(y) {
    let fibonaccy = [0,1,1];
    let a = 0;
    let b = 1 ;
    let c = 1;
    for (let i = 0; i < y ; i++) {
         a = b  ;
         a = c ;
         c = a + b ;
         fibonaccy.push(c)
    }
    return fibonaccy;
}
fibo
