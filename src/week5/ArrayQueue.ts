import {QueueInterface} from "./QueueInterFace";

export default class ArrayQueue<E> implements QueueInterface<E> {
    // 큐의 최대 용량
    private maxsize: number;
    // 데이터를 저장할 동적 배열
    private items: E[];

    constructor(maxsize: number) {
        this.maxsize = maxsize;
        this.items = [];
    }

    // 데이터를 추가합니다.
    enqueue(item: E): void {
        if (this.isFull()) {
            throw new Error("큐의 크기가 가득차서 데이터 추가 못 합니다.");
        }
        this.items[this.items.length] = item;
    }

    // 데이터를 삭제하고 값을 반환합니다.
    dequeue(): E | null {
        if (this.isEmpty()) {
            return null;
        }

        const itemToReturn = this.items[0];

        for (let i = 0; i < this.items.length - 1; i++) {
            this.items[i] = this.items[i + 1];
        }

        this.items.length = this.items.length - 1;

        return itemToReturn;
    }

    peek(): E | null {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[0];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    isFull(): boolean {
        return this.items.length >= this.maxsize;
    }

    size(): number {
        return this.items.length;
    }

    clear(): void {
        this.items.length = 0;
    }
}
