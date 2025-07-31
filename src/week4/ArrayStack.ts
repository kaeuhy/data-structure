import {StackInterface} from "./StackInterFace";

export default class ArrayStack<E> implements StackInterface<E> {
    private items: E[] = [];


    // top 확인
    peek(): E | undefined {
        return this.items[this.items.length - 1];
    }

    // top 꺼내기
    pop(): E | undefined {
        if (this.items.length === 0) {
            return undefined;
        }
        const value = this.items[this.items.length - 1];
        this.items.length--;
        return value;
    }

    // 배열에 넣기
    push(newItem: E): void {
        if (this.isFull()) {
            throw new Error("스택이 가득참요");
        }
        this.items[this.items.length] = newItem;
    }

    // 스택 사이즈
    size(): number {
        return this.items.length;
    }

    // 스택 초기화
    clear(): void {
        this.items = [];
    }

    // 비어있는지 확인
    isEmpty(): boolean {
        return this.items.length === 0;
    }

    // 가득차있는
    isFull(): boolean {
        return this.items.length === 10;
    }


}