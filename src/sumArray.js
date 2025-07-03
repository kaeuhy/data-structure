function sumArray(arr) {
    if(arr.length === 1)
        return arr[0];
    return arr.pop() + sumArray();
}

let arr = [1, 2, 3, 4, 5];
let sum = sumArray(arr);
console.log(sum);