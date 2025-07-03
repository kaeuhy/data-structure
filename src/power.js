function power(x, n) {
    if(n === 0) return 1;
    return x * power(2, n-1);

}

console.log(power(2, 5));