import {ListInterface} from "./ListInterface";

class Node<T> {
    item: T;
    next: Node<T> | null;

    constructor(item: T) {
        this.item = item;
        this.next = null;
    }
}

export class CircularLinkedList<T> implements ListInterface<T> {
    private head: Node<T> | null;
    private tail: Node<T> | null;
    private length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    add(index: number, item: T): void {
        if (index < 0 || index > this.length) {
            throw new Error("Index out of bounds");
        }

        const newNode = new Node(item);

        if (index === 0) {
            if (this.head === null) {
                this.head = newNode;
                this.tail = newNode;
                newNode.next = newNode; // 자기 자신을 가리킴
            } else {
                newNode.next = this.head;
                this.tail!.next = newNode;
                this.head = newNode;
            }
        } else {
            let prev = this.head!;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next!;
            }
            newNode.next = prev.next;
            prev.next = newNode;
            if (prev === this.tail) this.tail = newNode;
        }

        this.length++;
    }

    append(item: T): void {
        this.add(this.length, item); // 끝에 추가는 add(length)와 같음
    }

    remove(index: number): T {
        if (index < 0 || index >= this.length) {
            throw new Error("Index out of bounds");
        }

        let removedNode: Node<T>;

        if (index === 0) {
            removedNode = this.head!;
            if (this.length === 1) {
                // 노드가 하나만 있을 때
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head!.next;
                this.tail!.next = this.head;
            }
        } else {
            let prev = this.head!;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next!;
            }
            removedNode = prev.next!;
            prev.next = removedNode.next;
            if (removedNode === this.tail) {
                this.tail = prev;
            }
        }

        this.length--;
        return removedNode.item;
    }

    removeItem(item: T): boolean {
        let current = this.head;
        for (let i = 0; i < this.length; i++) {
            if (current!.item === item) {
                this.remove(i);
                return true;
            }
            current = current!.next;
        }
        return false;
    }

    get(index: number): T {
        if (index < 0 || index >= this.length) {
            throw new Error("Index out of bounds");
        }

        let current = this.head!;
        for (let i = 0; i < index; i++) {
            current = current.next!;
        }
        return current.item;
    }

    set(index: number, item: T): void {
        if (index < 0 || index >= this.length) {
            throw new Error("Index out of bounds");
        }

        let current = this.head!;
        for (let i = 0; i < index; i++) {
            current = current.next!;
        }
        current.item = item;
    }

    indexOf(item: T): number {
        let current = this.head;
        for (let i = 0; i < this.length; i++) {
            if (current!.item === item) return i;
            current = current!.next;
        }
        return -1;
    }

    size(): number {
        return this.length;
    }

    isEmpty(): boolean {
        return this.length === 0;
    }

    clear(): void {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}