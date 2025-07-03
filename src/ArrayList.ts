export class ArrayList<E> implements ArrayListInterface<E> {
    private items: E[] = [];

    add(i: number, x: E): void {
        if (i < 0 || i > this.items.length) {
            throw new Error("Error");
        }
        this.items.splice(i, 0, x);
    }

    append(x: E): void {
        this.items.push(x);
    }

    remove(i: number): void {
        if (i < 0 || i > this.items.length) {
            throw new Error("Error");
        }
        this.items.splice(i, 1);
    }

    // 해당 인덱스 값 가져오기
    get(i: number): void {
        if (i < 0 || i > this.items.length) {
            throw new Error("Error");
        }
        console.log(this.items[i]);
    }

    // 해당 인덱스 값 변경
    set(i: number, x: E): void {
        if (i < 0 || i > this.items.length) {
            throw new Error("Error");
        }
        this.items.splice(i, 1, x);
    }

    // 원하는 값 있는지 확인
    indexOf()

    // 배열 값 날리기

    //
}