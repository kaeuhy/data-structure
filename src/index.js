function index () {
    for (let num = 5; num >= 0; num--) {
        let sum;
        if(num >= 0) {
            sum -= num;
            return sum;
        }
        sum *= num;
    }
    return index;

}

const index1 = index();
console.log(index1);
