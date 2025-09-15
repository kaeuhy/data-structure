import {HashInterface} from "./HashInterface";

export class ArrayHashTable<E extends number> implements HashInterface<E> {
    private maxsize: number;
    private items: Array<E | undefined | null>;
    private numItems: number;

    constructor(maxsize: number = 10) {
        this.maxsize = maxsize;
        this.items = new Array(this.maxsize);
        this.numItems = 0;
    }

    hash(data: E): number {
        const hasValue = (2 * data) + 1;
        return hasValue % this.maxsize;
    }

    insert(data: E): void {
        if (this.isFull()) {
            throw new Error("Hash table is full.");
        }

        const hashIndex = this.hash(data);

        if (this.items[hashIndex] === undefined) {
            this.numItems++;
        }

        this.items[hashIndex] = data;
    }

    search(data: E): E | undefined {
        const hashIndex = this.hash(data);

        if (this.itmes[hashIndex] === data) {
            return this.items[hashIndex];
        }
        return undefined;
    }

    delete(data: E): void {
        const hashIndex = this.hash(data);

        if (this.items[hashIndex] === data) {
            this.items[hashIndex] = undefined;
            this.numItems--;
        }
    }

    isEmpty(): boolean {
        return this.numItems === 0;
    }

    isFull(): boolean {
        return this.numItems == this.maxsize;
    }

    clear(): void {
        this.items = new Array(this.maxsize);
        this.numItems = 0;
    }
}
//