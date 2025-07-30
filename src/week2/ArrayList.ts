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
    indexOf(x: E): number {
        return Array.prototype.indexOf.call(this.items, x);
    }

    //
    size() {
        return console.log(this.items.length);
    }

    // 리스트가 비었는지 확인
    isEmpty(): void {
        if (this.items.length === 0) {
            console.log("리스트가 비어있습니다");
        } else {
            console.log(this.items);
        }
    }
}