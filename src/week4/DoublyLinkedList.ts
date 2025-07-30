import {ListInterface} from "./ListInterface";

class Node<T> {
    item: T;
    next: Node<T> | null;
    prev: Node<T> | null;

    constructor(item: T) {
        this.item = item;
        this.next = null;
        this.prev = null;
    }
}

export class DoublyLinkedList<T> implements ListInterface<T> {
    private head: Node<T> | null;
    private tail: Node<T> | null;
    private size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    add(index: number, item: T): void {
        if (index < 0 || index > this.size) {
            throw new Error("Index out of bounds");
        }

        const newNode = new Node(item);

        if (index === 0) {
            // 맨 앞 삽입
            newNode.next = this.head;
            if (this.head) this.head.prev = newNode;
            this.head = newNode;
            if (this.size === 0) this.tail = newNode;
        } else if (index === this.size) {
            // 맨 뒤 삽입
            this.append(item);
            return;
        } else {
            // 중간 삽입
            let current = this.head;
            for (let i = 0; i < index; i++) {
                current = current!.next;
            }

            const prevNode = current!.prev;

            newNode.next = current;
            newNode.prev = prevNode;

            if (prevNode) prevNode.next = newNode;
            current!.prev = newNode;
        }

        this.size++;
    }

    append(item: T): void {
        const newNode = new Node(item);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail!.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.size++;
    }

    remove(index: number): T {
        if (index < 0 || index >= this.size) {
            throw new Error("Index out of bounds");
        }

        let removedNode: Node<T>;

        if (index === 0) {
            removedNode = this.head!;
            this.head = this.head!.next;
            if (this.head) this.head.prev = null;
            if (removedNode === this.tail) this.tail = null;
        } else if (index === this.size - 1) {
            removedNode = this.tail!;
            this.tail = this.tail!.prev;
            if (this.tail) this.tail.next = null;
            if (removedNode === this.head) this.head = null;
        } else {
            let current = this.head!;
            for (let i = 0; i < index; i++) {
                current = current.next!;
            }

            removedNode = current;
            const prevNode = current.prev!;
            const nextNode = current.next!;

            prevNode.next = nextNode;
            nextNode.prev = prevNode;
        }

        this.size--;
        return removedNode.item;
    }

    removeItem(x: T): boolean {
        let current = this.head;
        let index = 0;
        while (current !== null) {
            if (current.item === x) {
                this.remove(index);
                return true;
            }
            current = current.next;
            index++;
        }
        return false;
    }

    get(index: number): T {
        if (index < 0 || index >= this.size) {
            throw new Error("Index out of bounds");
        }

        let current = this.head!;
        for (let i = 0; i < index; i++) {
            current = current.next!;
        }

        return current.item;
    }

    set(index: number, item: T): void {
        if (index < 0 || index >= this.size) {
            throw new Error("Index out of bounds");
        }

        let current = this.head!;
        for (let i = 0; i < index; i++) {
            current = current.next!;
        }

        current.item = item;
    }

    indexOf(x: T): number {
        let current = this.head;
        let index = 0;

        while (current !== null) {
            if (current.item === x) return index;
            current = current.next;
            index++;
        }

        return -1;
    }

    size(): number {
        return this.size;
    }

    isEmpty(): boolean {
        return this.size === 0;
    }

    clear(): void {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
}

const list = new DoublyLinkedList<number>();