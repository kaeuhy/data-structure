function hanoi(count: number, from: string, to: string, temp: string): void {
    if (count === 0) {
        return;
    }

    hanoi(count - 1, from, temp, to);
    console.log(`원반 ${count}를 ${from}에서 ${to}로 이동`);
    hanoi(count -1, temp, to, from)
;}

const numberOfDisks: number = 3;
const source: string = 'A';
const destination: string = 'C';
const assist: string = 'B';

hanoit(numberOfDisks, source, destination, assist);