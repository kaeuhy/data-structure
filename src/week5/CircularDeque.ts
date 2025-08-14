import {DequeInterface} from "./DequeInterface";

export class CircularDeque<E> implements DequeInterface<E> {
    private items: Array<E | undefined>;
    // 맨 앞 요소
    private front: number;
    // 맨 뒤 요소
    private tail: number;
    // 큐에 저장된 요소
    private numItems: number;
    // 최대 용량 maxsize
    private readonly maxsize: number;

    constructor(maxsize: number = 10) {
        this.maxsize = maxsize;
        this.items = new Array<E | undefined>(maxsize);
        this.front = 0;
        this.tail = 0;
        this.numItems = 0;
    }

    addFront(newItem: E): void {
        if (this.numItems === this.maxsize) {
            throw new Error("Deque is full");
        }
        this.front = (this.front -1) % this.maxsize;
        this.items[this.front] = newItem;
        this.numItems++;
    }

    addTail(newItem: E): void {
        if (this.numItems === this.maxsize) {
            throw new Error("Deque is full");
        }
        this.items[this.tail] = newItem;
        this.tail = (this.tail + 1) % this.maxsize;
        this.numItems++;
    }

    deleteFront(): E | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        const item = this.items[this.front];
        this.items[this.front] = undefined;
        this.front = (this.front + 1) % this.maxsize;
        this.numItems--;
        return item;
    }

    deleteTail(): E | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        this.tail = (this.tail - 1 + this.maxsize) % this.maxsize;
        const item = this.items[this.tail];
        this.items[this.tail] = undefined;
        this.numItems--;
        return item;
    }

    isEmpty(): boolean {
        return this.numItems === 0;
    }

    size(): number {
        return this.numItems;
    }

    clear(): void {
        this.items = new Array<E | undefined>(this.maxsize);
        this.front = 0;
        this.tail = 0;
        this.numItems = 0;
    }
}