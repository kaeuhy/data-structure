import {QueueInterface} from "./QueueInterFace";

export class CircularQueue<E> implements QueueInterface<E> {
    // 배열 선언
    private items: (E | undefined)[];
    // 맨 앞 요소
    private front: number;
    // 맨 뒤 요소
    private tail: number;
    // 큐에 저장된 요소
    private numItems: number;
    // 최대 용량 maxsize
    private readonly maxsize: number;

    constructor(capacity: number = 10) {
        this.maxsize = capacity;
        this.items = new Array<E | undefined>(capacity);
        this.front = 0;
        this.tail = 0;
        this.numItems = 0;
    }

    enqueue(newItem: E): void {
        if (this.numItems === this.maxsize) {
            throw new Error('queue is full.');
        }
        this.items[this.tail] = newItem;
        this.tail = (this.tail + 1) % this.maxsize;
        this.numItems++;
    }

    dequeue(): E | undefined {
        if (this.isEmpty()) {
            throw new Error('queue is empty.');
        }
        const item = this.items[this.front];
        this.items[this.front] = undefined;
        this.front = (this.front + 1) % this.maxsize;
        this.numItems--;
        return item;
    }

    peek(): E | undefined {
        return this.isEmpty() ? undefined : this.items[this.front];
    }

    isEmpty(): boolean {
        return this.numItems === 0;
    }

    isFull(): boolean {
        return this.numItems === this.maxsize;
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