function myFunc (n: number): number {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const num: number = 10;
console.log(`${num}! = ${factorial(num)}`);